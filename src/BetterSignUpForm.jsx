import { useState } from "react";
export default function BetterSignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        password: "",
    });

    const handleChange = (evt) => {
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            return {...currData, [changeField]: newValue};
        })
    }
    
    const handleSubmit = () => {
        console.log(formData);
    }
    
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
                type="text" 
                placeholder="first name" 
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstname"
            />
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                placeholder="last name" 
                value={formData.lastName}
                onChange={handleChange}
                id="lastname"
                name="lastName"
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                placeholder="password" 
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}