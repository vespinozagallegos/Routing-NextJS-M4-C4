//? PASO 1
// Aceeder a los params desestructurando params
// params es un objeto PERO esta vez como estamos capturando MAS de un PARAMS cons [...slug]
// debemos hacer la diferencia en el retorno
// Ya que renderiza el MISMO retorno <h1>Este es SlugStore</h1>
// independiente de que agreguemos
// store/products ó store/products/shirts // store/category ó store/category/subcategory...

// Esto es porque slug pasa a ser un array de strings
// [slug]   ---> { params }
// [...slug]---> { slug: ["category", "subcategory"] }

// export const SlugStore = ({ params }) => {   //---> { slug: ["products", "shirts"] }
//     return(
//         <div>
//             <h1>Este es SlugStore</h1>
//         </div>
//     );
// }

// export default SlugStore;

//?PASO 2  HACER UN LLAMADO A UNA API CON VALORES QUE ME PASEN POR PARÁMETROS
// Funcion que tome los valores de los parámetros
// que en base a esos parámetros haga una consulta a la API
// para poder consumir los datos y renderizarlos

// params no van desesructurados porque es una FUNCIÓN NO un COMPONENTE
const fetchDataStore = async (params) => {                              //?<-------- se puede reemplazar params por {slug}
    // desestructuramos SLUG que es un objeto dentro de la PROPIEDAD PARAMS
    const [category, subcategory] = params.slug;                        //?<-------- y params.slug se cambia por slug solamente -> CONSIDERANDO QUE PARAMS ES ESTE OBJETO { slug: ["category", "subcategory"] }
    // PETICIÓN(request) con fetch a una API FICTICIA
    const data = await fetch(
        `https://api.tienda.com/products?category=${category}&subcategory=${subcategory}`
    );
    //! PARSEAR la INFo antes de utilizarla, debido a que es una REQUEST con FETCH
    // la info viene en formato raw(crudo)--->(JSON, XML, texto plano, etc.)
    // El método .json() convierte el contenido de ese cuerpo a un objeto JavaScript manipulable. (PARSEAR)
    const items = await data.json();
    // una vez obtenido, retornamos la info
    return items;
}

export const SlugStore = async({ params }) => {   //---> { slug: ["category", "subcategory"] }
    // constante que espera los datos de la FUNCIÓN
    // que recibe los params directamente sin DESESTRUCTURAR
    const itemsToRenders = await fetchDataStore(params);
    return(
        // RENDERIZAR LA INFORMACION PARSEADA en la funcion y GUARDADA EN itemsToRenders
        // se mapea itemsToRenders antes de renderizar la info
        // el div va son su key id
        <div>
            {itemsToRenders.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default SlugStore;