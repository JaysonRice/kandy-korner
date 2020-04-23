import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <>
        <div className="products">
        {
            products.map(prod => {

            const type = productTypes.find(p => p.id === prod.typeId)
                
            return <Product key={prod.id} 
                            product={prod}
                            productType={type} 
                            />
            })
        }
        </div>
        </>
    )
}