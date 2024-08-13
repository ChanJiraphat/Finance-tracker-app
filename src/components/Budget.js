import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const {newbudget} = useState(AppContext);


    const handleBudgetChange = () => {
        <input
            type="number"
            value={newbudget}
            onChange = {(event) => parseInt(event.target.value)}
            style = {{marginLeft:"5px", marginRight:"5px",}}           
            />
        dispatch({
                type: 'SET_BUDGET',
                payload: newbudget,
            });
    };
    
    
    return(
        <div className= 'alert alert-secondary'>
            <span>
                Budget: ${budget}
            </span>
            <button type="button" class="btn btn-primary" onClick = {handleBudgetChange}>Edit</button>
            
        </div> 
    )
};

export default Budget;

