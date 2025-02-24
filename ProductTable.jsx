import React, {useState} from "react";
import ProductRow from "./ProductRow";


const products=[
    {id:1, name:"Printed cotton Jacket"},
    {id: 2,name: "Blue Faux Leather" },
    {id: 3,name: "Tribal Waterfall Vest" },
    {id: 4,name: "Braver Bomber Jacket" },
    {id: 5,name: "Olive Drape Vest" },
    {id: 6,name: "Black Denim Jacket" },
    {id: 7,name: "Army Green Jacket" },
];

function ProductTable() {
    const [selected, setSelected]=useState(products);
    return(
        <div className="table-container">
            <h2>Products</h2>


            {/* Filter Buttons */}
      <div className="button-group">
        <button className="active">Active</button>
        <button>Inactive</button>
        <button>All</button>
      </div>



        {/* Table */}
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Product</th>
                    <th>Tags</th>  
                    <th>Var</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Low</th>
                  </tr>
            </thead>
            <tbody>
                
                {selected.map((product)=>(
                    <ProductRow key={product.id} product={product} />    
                ))}
            </tbody>
          </table>
        </div>

    );
}


    export default ProductTable;
