import { createContext, useReducer } from "react"

const createContext = createContext({
    items,
    addItem, 
    removeItem
});

function cartReducer(state, action){
    if(action.type === "ADD_ITEM"){
        const currentIndex = state.items.findIndex((item) => {
            return item.id === action.item.id;
        });

        const updatedItems = [...state.items];

        if(currentIndex > -1){
            const existingItem = state.items[currentIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItem[currentIndex] = updatedItem;
        }else{
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return {...state, items: updatedItems};
    }

    if(action.type === "REMOVE_ITEM"){
        // do something
    }
    return state;
}

function cartContextProvider({children}) {
    useReducer(cartReducer, initState);
    return(
        <createContext>{children}</createContext>
    )
}