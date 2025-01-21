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

//?PASO 2
// Funcion que tome los valores de los parámetros
// que en base a esos parámetros haga una consulta a la API
// para poder consumir los datos y renderizarlos

// params no van desesructurados porque es una FUNCIÓN NO un COMPONENTE
const fetchDataStore = async (params) => {

}

export const SlugStore = async({ params }) => {   //---> { slug: ["category", "subcategory"] }
    // constante que espera los datos de la FUNCIÓN
    // que recibe los params directamente sin DESESTRUCTURAR
    const itemsToRenders = await fetchDataStore(params);
    return(
        <div>
            <h1>Este es SlugStore</h1>
        </div>
    );
}

export default SlugStore;