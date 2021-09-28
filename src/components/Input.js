import "./input.css"
const Input = ( {name, value, label, func} ) => {
    return (
        <>
            <label className="task" htmlFor={name}>{label}</label>
            <input className="inputBox" type="text" value={value} onChange={(e) => func(e.target.value)}></input>
        </>
    )
}

export default Input;