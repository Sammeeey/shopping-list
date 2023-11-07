// import './ShoppingList.css'

import { useState } from "react";
import NewListItemForm from "./NewListItemForm";

const getLocalList = () => JSON.parse(localStorage.getItem('shoppingList'))

function ShoppingList() {
    const [shoppingList, setShoppingList] = useState(getLocalList() ? getLocalList() : [])

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
