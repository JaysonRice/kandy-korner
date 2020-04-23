import React from "react"
import "./Kandy.css"
import "./location/Location.css"
import LocationList from "./location/LocationList"
import ProductList from "./products/ProductList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"



export default () => (
    <>
<h1>Welcome to Kandy Korner!</h1>
    
    <LocationProvider>
        <ProductProvider>
        <ProductTypeProvider>
                <h2>Locations</h2>
                <LocationList />
                <h2>Products</h2>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>
    </LocationProvider>

    </>
)