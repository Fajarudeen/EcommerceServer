const db=require('./db')

// get all products from db

const getProducts=()=>{
    return db.Cart.find().then(
        (result)=>{
            if (result) {
                return{
                    status:true,
                    statusCode:200,
                    product:result
                }    
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'product not found'
                }
            }
            
        }
    )
}

module.exports={
    getProducts
}
