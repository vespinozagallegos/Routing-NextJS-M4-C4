// Componente
// como tomar el paramtero que se recibe luego de la direccion inicial? ---> /cualquiercosa     (son valores que están ingresando en la RUTA a los que accedo con el nombre de la carpeta params.profile)
// con el HOOK use params. PERO REACT OFRECE otra alternativa
//! se desestructura { params } 
export const Profile = ({ params }) => {
    //! se utiliza con minuscula porque sigue el nombre de esta CARPETA
    return (
        <div>
            <h1>Soy el Profile: {params.profile}</h1>
        </div>
    );
}

export default Profile;

// SI QUIERO CREAR UN PERFIL CON EL MISMO NOMBRE DE UNA RUTA YA DEFINIDA, COMO LO HAGO? -----> enrutamiento anidado es la respuesta 