import React from "react"
import "./Kandy.css"
import LocationList from "./location/LocationList"
import ProductList from "./products/ProductList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import EmployeeList from "./employee/EmployeeList"



export default () => (
    <>
<h1>Welcome to Kandy Korner!</h1>
    
        <ProductProvider>
            <ProductTypeProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <h2>Locations</h2>
                        <LocationList />
                        <h2>Products</h2>
                        <ProductList />
                        <h2>Employees</h2>
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </ProductTypeProvider>
        </ProductProvider>
    </>
)