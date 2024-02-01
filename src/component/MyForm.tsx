import React, { useState } from "react";

const MyForm : React.FC = () => {
    const [name, setName] = useState<string | undefined>();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    
    const handleForm = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);

    }

    return (
        <div>
            <form onSubmit={handleForm}>
            <input onChange={handleNameChange} type="text" placeholder="Enter Name"></input>
            <h1>{name}</h1>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm;
