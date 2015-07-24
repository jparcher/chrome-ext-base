
function task() {
  chrome.tabs.executeScript({
    file: 'main.js'
  }); 
  window.close();
}



document.getElementById('button').addEventListener('click', task);
