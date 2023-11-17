import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { PRODUCTS } from "./products";

function Searchproduct() {

    const query = useLocation().search
    const queryparam = new useSearchParams().get('q')
    
    return(
        <div>Login</div>
    )
}

export default Searchproduct