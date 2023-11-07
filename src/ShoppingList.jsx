// import './ShoppingList.css'

import { useState } from "react";
import NewListItemForm from "./NewListItemForm";

function ShoppingList() {
    const [shoppingList, setShoppingList] = useState([])

    return (
        <>
        <h1>Shopping List📝</h1>
        <ul>
        {shoppingList.map((item, i) => <li key={i}>{item.quantity}x {item.name}</li>)}
        </ul>
        <NewListItemForm {...{shoppingList, setShoppingList}} />
        </>
    )
}

export default ShoppingList
