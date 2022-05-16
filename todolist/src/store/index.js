import { createContext, useContext, useReducer } from 'react'
import { listReducer } from './list/listReducer'
import { listInitState } from './list/listInitState'


const ListContext = createContext();

export const useStore = () => useContext(ListContext);

export const StoreProvider = ({children}) => {
    const [listState, dispatchList] = useReducer(
        listReducer,
        listInitState
    );

    return (
        <ListContext.Provider value={{listState, dispatchList}}>
            {children}
        </ListContext.Provider>
    )
}