import React from "react";
import pizzaData from './Data';

function Pizza() {
    return (
<div className="pizza">
      {pizzaData.map((item, index) => {
        return (
          <div key={index}>
                <img src={item.photoName} alt={item.name} />
                <div>
                    <h1>{item.name}</h1>
            <p>Ingredients: {item.ingredients}</p>
                {/* <p>Price: {item.price}</p> */}
               {/* <p>{item.soldOut ? <p>Sold Out</p> : <p>Available</p>}</p> */}
</div>
          </div>
        );
      })}
    </div>
    );
}



export default Pizza;