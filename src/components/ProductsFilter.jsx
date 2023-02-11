import products from '../Data.js'

const ProductsFilter = () => { 
   
    
     
    //Should a shallow copy of products be made...?

    const filteredProducts = products.filter( ({onSale}) => onSale == true);  

    const ProductNames = filteredProducts.map( function(item) {
        return item.name + ", ";
    });  


    return <div>
            <p className="text-center">Products Filtered By Price: {ProductNames} </p> 
    </div>
} 

export default ProductsFilter;