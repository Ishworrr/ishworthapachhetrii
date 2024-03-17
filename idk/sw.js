const version = '1';
const cacheName = `YOURNAME-${version}`;

self.addEventListener('install', (ev) => {
  //cache static files, if needed
});
self.addEventListener('activate', (ev) => {
  //clear old caches, if desired
});
self.addEventListener('fetch', (ev) => {
  //handle all fetch requests
});
self.addEventListener('message', (ev) => {
  //listen for messages from the main thread
});

function sendMessageToMain() {
  //send a message to the main threads of all clients
}
