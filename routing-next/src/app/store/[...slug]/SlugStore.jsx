// Aceeder a los params desestructurando params
// params es un objeto PERO esta vez como estamos capturando MAS de un PARAMS cons [...slug]
// debemos hacer la diferencia en el retorno
// Ya que renderiza el MISMO retorno <h1>Este es SlugStore</h1>
// independiente de que agreguemos
// store/products ó store/products/shirts // store/category ó store/category/subcategory...

// Para hacer la diferencia debemos
// agregar como array de strings { slug: ["category", "subcategory"] } + 1 peticion fetch
export const SlugStore = ({ params }) => {
    return(
        <div>
            <h1>Este es SlugStore</h1>
        </div>
    );
}

export default SlugStore;