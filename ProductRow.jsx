import React from 'react'

function ProductRow({product}) {
    return(
        <tr>
            <td><input type="checkbox"  /></td>
            <td>{product.name}</td>
            <td>
                <span className="tag">Unisex</span>
                <span className="tag">Bag</span>
            </td>
            <td>3</td>
            <td>$45.00</td>
            <td>999</td>
            <td>500</td>

        </tr>

    );
}

export default ProductRow