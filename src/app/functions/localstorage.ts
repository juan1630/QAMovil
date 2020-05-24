export function leerLS() {

    let respuestasLS = JSON.parse( localStorage.getItem('respuestas') );
    console.log( respuestasLS );
    return respuestasLS;
}


export function borrarLS(){
    localStorage.removeItem('respuestas');
}