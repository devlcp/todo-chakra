export function register(){
  if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
      }).catch(err => {
        console.log(err.response)
      })
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
