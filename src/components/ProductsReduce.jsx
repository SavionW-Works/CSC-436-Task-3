import products from '../Data.js'

const ProductsReduce = () => {
    const totalCost = products.reduce( (accumulator, index) => {
        return accumulator + index.price;
    }, 0);  

    return <div>
            <p className="text-center">Total Cost: ${totalCost}</p> 
    </div>
} 

export default ProductsReduce;