import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0,
    });

    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            };
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: 0 })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product Name</label>
                <input
                    type="text"
                    placeholder="product name"
                    name="product"
                    id="product"
                    onChange={handleChange}
                    value={formData.product}
                />
                <label htmlFor="quantity">quantity</label>
                <input
                    type="number"
                    placeholder="quantity"
                    name="quantity"
                    id="quantity"
                    onChange={handleChange}
                    value={formData.quantity}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}