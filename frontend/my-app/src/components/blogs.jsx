import React from "react";
import blog1 from '../assets/business1.jpg'
import blog2 from '../assets/business2.jpg'
import blog3 from '../assets/business3.jpg'
import blog4 from '../assets/business4.jpg'
import {Link} from "react-router-dom"

function blogs() {
    return <>
    <div data-aos="zoom-in" className="col-3">
     <div className="row">
        <img src={blog1} alt="" className="card-img-top img-fluid mb-3 p-2 h-100" />
        <div className="card-body">
            <p>Mary Smith</p>
           <p className="mb-3">They sell the best Shoes and clothings at Affordable Rates with Free Delivery without 
           You bothering Yourself for Money With Delivery
            </p> 
            <Link to={"/blog"}>
            <button className="button-blog">
                Learn More
            </button>
            </Link>
        </div>
     </div>
    </div>
    <div data-aos="zoom-in" className="col-3">
     <div className="row">
        <img src={blog2} alt="" className="card-img-top img-fluid mb-3 p-2 h-100" />
        <div className="card-body">
            <p>Kira Kosarin</p>
           <p className="mb-3">Their Dispatch Rider is always Fast and Reliable and Delivers Orders/Packages on Time
           Without Hesistation or complaint
            </p> 
            <Link to={"/blog"}>
            <button className="button-blog">
                Learn More
            </button>
            </Link>
        </div>
     </div>
    </div>
    <div data-aos="zoom-in" className="col-3">
     <div className="row">
        <img src={blog3} alt="" className="card-img-top img-fluid mb-3 p-3 h-70" />
        <div className="card-body">
            <p>John Doe</p>
           <p className="mb-3">I became obsessed with Muqeet store when the king of Music himself Davido said he Likes 
           Shopping with them that they Deliver withing minutes without delay
            </p>
            <Link to={"/blog"}> 
            <button className="button-blog">
                Learn More
            </button>
            </Link>
        </div>
     </div>
    </div>
    <div data-aos="zoom-in" className="col-3">
     <div className="row">
        <img src={blog4} alt="" className="card-img-top img-fluid mb-3 p-2 h-100" />
        <div className="card-body">
            <p>Muqeet Kareem</p>
           <p className="mb-3">A friend of mine Introduced this Store to me since then muqeet store
                               Has been my Favourite when it comes to online shopping
            </p> 
            <Link to={"/blog"}>
            <button className="button-blog">Learn More</button>
            </Link>
        </div>
     </div>
    </div>
    </>;
}
export default blogs