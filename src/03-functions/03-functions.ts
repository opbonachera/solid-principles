(() => {

    // función para obtener información de una película por Id
    function getMovieInformationByID( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastFromId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyByID( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function createNewMovie({ title, cast, rating, description } : Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }
})();
