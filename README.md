![Собирается](https://img.shields.io/badge/Сборка-Успешно-brightgreen?style=plastic&logo=netlify)
![Покрытие тестами](https://img.shields.io/badge/Покрытие%20тестами-100%20процетов-yellow?style=plastic&logo=mocha)
![Прохождение тестов](https://img.shields.io/badge/Прохождение%20тестов-1/1-brightgreen?style=plastic&logo=mocha)

# Simpre UTM collector
Упрощенная версия [utm-to-localstorage](https://github.com/vanyapr/utm-to-localstorage/). Парсит строку запроса после загрузки страницы и собирает часть строки с UTM 
меткой в массив, хранящийся в локалсторадже.

## Демо
[Открыть демонстрацию](https://vanyapr.github.io/utm-to-localstorage/?utm_source=github&utm_medium=cpm&utm_something=cpm_45)

## Задача
Есть необходимость сохранять утм метки в браузере пользователя, чтобы потом сабмитить их вместе с заказами, и на их
основе строить последующую аналитику. 

### Надо учесть
1) Меток может быть много, и каждую метку нужно складывать в стор
2) Юзер может повторно заходить по одним и тем же меткам - повторные заходы надо посчитать
3) Нужно хранить даты переходов по утм меткам

### Как выглядит стор
```js
// Получение данных из хранилища
const store = localStorage.getItem('utm-history-list');

// Хранилища представляет собой объект
// UTM метка: ?utm_source=yandex&utm_medium=cpm
exampleStore = {
    'utm_source=yandex&utm_medium=cpm': ['1648680667990', '1648710523235'],
    'utm_source=google&utm_medium=cpm': ['1648680667990', '1648710523235'],
  }
```

## Стэк
1) **TypeScript** - тайпскрипт.
2) **EsLint** - линтер разметки JS.
3) **Webpack** - сборщик проектов.

## Запуск проекта
1) Установите зависимости.
2) Для старта разработки `npm run dev`.
3) Для сборки проекта `npm run build`.

## TODO
1) Переписать на классы
# simpre-utm-collect
