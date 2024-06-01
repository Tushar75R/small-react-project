import { useContext, createContext } from "react";

export const ThemeContex = createContext({
    themeMode : "light",
    darkMode : () =>{},
    lightMode : () =>{}
})
export const ThemeProvider  = ThemeContex.Provider;

export default function useTheme(){
    return useContext(ThemeContex);
}