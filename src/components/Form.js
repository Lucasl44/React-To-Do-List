import { useState } from "react";
import Input from "./Input";
export const Form = ( {handleForm} ) => {
    const [todo, setToDo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm( {todo} );
        setToDo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input type="text" name="todo" label="Task: " value={todo} func={setToDo} />
            <button type="submit">Add item</button>
        </form>
    )
}

