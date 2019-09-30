if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js').then(function(registration) {
            // Registration was successful
            console.log('Registro de ServiceWorker exitoso con scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('Registro ServiceWorker fallado: ', err);
        });
    });
}