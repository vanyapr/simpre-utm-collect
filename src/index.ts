type TUTMStore = Record<string, string>;

(function () {
  // Настройки
  const utmStoreName = 'utm-history-list';
  const emptyStore = {};

  let store: TUTMStore = {};

  // Получает данные стора
  function readStore() {
    // Получаем из localStorage сохраненные метки
    const utmStore = localStorage.getItem(utmStoreName);

    if (!utmStore) {
      localStorage.setItem(utmStoreName, JSON.stringify(emptyStore));
      store = emptyStore;
    } else {
      store = JSON.parse(utmStore);
    }
  }

  // Получает утм параметры из строки запроса
  function parseUTM(): string | null {
    const queryString = document.location.search;

    // ?utm_source=yandex&utm_medium=cpm&utm_...
    if (queryString) {
      const UTMStringRE = /utm_source=[a-zA-Z_0-9=&.{}|]+/gim;
      const UTMSource = queryString.match(UTMStringRE);

      return UTMSource ? UTMSource[0] : null;
    }

    return null;
  }

  function mergeObjects(lhs: any, rhs: any) {
    for (let key in rhs) {
      if (rhs[key].constructor === Object) {
        // Если объект
        if (lhs[key]) {
          lhs[key] = mergeObjects(lhs[key], rhs[key]);
        } else {
          lhs[key] = rhs[key];
        }
      } else if (rhs[key].constructor === Array) {
        // Если у нас массив
        if (lhs[key]) {
          lhs[key] = lhs[key].concat(rhs[key]);
        } else {
          lhs[key] = rhs[key]
        }
      } else {
        // Если значение
        lhs[key] = rhs[key];
      }
    }

    return lhs;
  }

  // Создает новую запись
  function createRecord(UTMStr: string) {
    return {
      [UTMStr]: [Date.now().toString()]
    }
  }

  // Вносит данные в стор
  function writeStore(data: Record<string, any>) {
    // Сливаем существующий стор с полученным объектом
    store = mergeObjects(store, data);
    localStorage.setItem(utmStoreName, JSON.stringify(store));
  }

  function onDocumentLoad() {
    readStore();
    const UTMData = parseUTM();
    if (UTMData) {
      const newData = createRecord(UTMData);
      writeStore(newData);
    }
  }

  // Если пришли утм метки, складываем их в хранилище
  document.addEventListener('DOMContentLoaded', onDocumentLoad);
})();
