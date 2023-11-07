// import './NewListItemForm.css'

import { useState } from "react"

function NewListItemForm({setShoppingList}) {
    const initialItem = {name: "", quantity: ""}
    const [listItem, setListItem] = useState({...initialItem})

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        setListItem(prevListItem => ({...prevListItem, [fieldName]: fieldValue}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShoppingList(prevShoppingList => 
            [...prevShoppingList, listItem]
        );
        setListItem({...initialItem});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New List Item:</label>
            <input type="text" value={listItem.name} name="name"
                onChange={handleChange}
            />
            <label htmlFor="quantity">How many?</label>
            <input type="number" value={listItem.quantity} name="quantity"
                onChange={handleChange}
            />
            <button>Add new item</button>
        </form>
    )
}

export default NewListItemForm
