import React, { useState } from "react";

const EditBudget = (props) => {
    const[value,setvalue] = useState(props.budget);
    return (
        <><input
        type="number"
        value={newbudget}
        onChange = {(event) => parseInt(event.target.value)}
        style = {{marginLeft:"5px", marginRight:"5px",}}           
        />
        <button type="button" className= "btn btn-warning" onClick={() => props.handleSaveClick(value)}>Save</button>
        </>

    )
}

export default EditBudget;