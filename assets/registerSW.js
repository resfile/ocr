if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('./assets/sw.js', { scope: './assets/' })})}