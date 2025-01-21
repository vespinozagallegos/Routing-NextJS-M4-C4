// Aceeder a los params desestructurando params
// params es un objeto PERO esta vez necesitamos MAS de un PARAMS
// si dejamos { params } podemos agregar mil slashes diferentes
// store/products//shirts o store/category/subcategory...
// Y renderiza el MISMO retorno <h1>Este es SlugStore</h1>

// Para hacer la diferencia debemos
// agregar como array de strings { slug: ["category", "subcategory"] }
export const SlugStore = ({ params }) => {
    return(
        <div>
            <h1>Este es SlugStore</h1>
        </div>
    );
}

export default SlugStore;