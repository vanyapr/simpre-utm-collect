const utmDisplayArea = document.getElementById('data');

console.log(utmDisplayArea)

const displayCurrentUtmStore = () => {
  console.log('Апдейт стора?')

  const data = localStorage.getItem('utm-history-list');

  if (data && utmDisplayArea) {
    utmDisplayArea.innerHTML = data.toString().replaceAll('],', '], \n\n\r');
    // utmDisplayArea.innerHTML = JSON.stringify(data, null, '  ');
  }
}


displayCurrentUtmStore();
