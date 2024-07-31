import React from "react";

function Footer() {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen);
  
    return (< div className="footer" >
        <div  className="order"> 
            <h3>We are open until {closeHour}:00. Come visit us or order oline.</h3 >
            <button className="btn">Order Now</button>
        </div>
    </div>
    
    
    
    );
}


export default Footer;