import { createContext, useState } from "react";

export const AppContext = createContext();

const ThemeProvider = ({children}) => {

    const [data, setData] = useState();

    return(
        <AppContext.Provider value={{data, setData}}>
            {children}
        </AppContext.Provider>
    );
}

export default ThemeProvider;