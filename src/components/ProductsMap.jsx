import products from '../Data.js'

const ProductsMap = () => {
    const ProductNames = products.map( function(item) {
        return item.name + "\n ";
    });  

    return <div>
            <p className="text-center">Product Names: {ProductNames}</p> 
    </div>
} 

export default ProductsMap;