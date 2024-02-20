import { createContext } from "react";
import { useContext } from "react";

export const ThemeContext = createContext({

    themeMode : "light", // default mode 
    lightMode : ()=>{},
    darkMode : ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}
