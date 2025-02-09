import { createContext, useReducer} from 'react';

const AppReducer = (state,action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses,action.payload],
            };
        case "DELETE_EXPENSES":
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload),
            }
        case "SET_BUDGET":
            return{
                ...state,
                budget: action.payload,
            };
        default:
            return state;

    }
};


const initialState ={
    budget : 3000,
    expenses : [
        { id: 12, name:'shopping', cost: 50},
        { id: 14, name:'Food', cost: 60},
        { id: 23, name:'Transportation', cost: 500},
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value ={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)

};

