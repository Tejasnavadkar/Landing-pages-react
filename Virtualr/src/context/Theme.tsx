import { createContext, useContext, useEffect, useState } from "react";

 
export const themeContext = createContext<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> } | null>(null)

export const useTheme = () =>{

   return useContext(themeContext)
}



export const ThemeProvider = ({children}) =>{


   const [theme,setTheme] = useState('dark')

   useEffect(()=>{
    document.documentElement.setAttribute('themMode',theme)
   },[theme])

    return(
        <themeContext.Provider value={{theme,setTheme}}>
            {children}
        </themeContext.Provider>
    )
   

}