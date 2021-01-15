
/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById('button');

button.addEventListener('click', () => {
    let xhr;

    // Para internet Explore por de bajo de la versión 11
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");
    //////////

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => { //Cuando la información ha llegado, en el cual load se dispara cuando t/ la información llego al objeto. Una vez llegada esa información se guarda en data.
        const dataJSON = JSON.parse(data.target.response); //El JSON.parse se debe a que cuando llega la información llega en formato string y eso no es lo que queremos. Al colocar esto convertimos ese string en un formato JSON, o sea, en objeto.

        //Imprimiendo en pantalla
        const list = document.getElementById('list');
        for(const userInfo of dataJSON) {
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem)
        }
    });

    xhr.send() //Enviando la información
});