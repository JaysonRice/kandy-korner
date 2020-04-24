import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ProductTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/producttypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductType = productType => {
        return fetch("http://localhost:8088/producttypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productType)
        })
            .then(getProductTypes)
    }
    
    useEffect(() => {
        getProductTypes()
    }, [])

    useEffect(() => {
        console.log("****  PRODUCT TYPE APPLICATION STATE CHANGED  ****")
    }, [productTypes])

    return (
        <ProductTypeContext.Provider value={{
            productTypes, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}