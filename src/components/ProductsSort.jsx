import products from '../Data.js'

const ProductsSort = () => { 
   
    
     
    //Should a shallow copy of products be made...?

    products.sort( (a, b) => a.price - b.price );  

    const ProductNames = products.map( function(item) {
        return item.name + ", ";
    });  


    return <div>
            <p className="text-center">Products Sorted By Price: {ProductNames} </p> 
    </div>
} 

export default ProductsSort;