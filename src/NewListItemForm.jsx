// import './NewListItemForm.css'

import { useState } from "react"
import { useForm } from "react-hook-form"

function NewListItemForm({setShoppingList}) {
    const initialItem = {name: "", quantity: ""}
    const [listItem, setListItem] = useState({...initialItem})
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        setShoppingList(prevShoppingList => 
            [...prevShoppingList, data]
        );
    }
    console.log(watch(["name", "quantity"]))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">New List Item:</label>
            <input type="text" {...register("name", {required: true})}/>
            {errors.name && <span>This field is required</span>}

            <label htmlFor="quantity">How many?</label>
            <input type="number" {...register("quantity", {min: 3})}/>
            {errors.quantity && <span>Min quantity: 3</span>}

            <button>Add new item</button>
        </form>
    )
}

export default NewListItemForm
