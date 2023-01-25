const utmDisplayArea = document.getElementById('data');

const displayCurrentUtmStore = () => {
  const data = localStorage.getItem('utm-history-list');

  if (data && utmDisplayArea) {
    utmDisplayArea.innerHTML = data.toString();
  }
}


addEventListener('storage', displayCurrentUtmStore);

