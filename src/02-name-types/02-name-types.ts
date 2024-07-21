(() => {

    // arreglo de temperaturas celsius
    const temperaturesCelcius = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const userList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const emailList = userList.map( u => u.email );

    // Variables booleanas de un video juego
    const jumpFlag = false;
    const runFlag = true;
    const emptyFlag = true;
    const loadingFlag = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - start;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByURL( u: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( s: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }



})();
