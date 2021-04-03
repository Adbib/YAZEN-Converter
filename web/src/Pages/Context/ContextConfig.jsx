import React, {createContext} from "react";
import {config} from '../../config'


export const ThemeContext =createContext("light");

 export default function ContextConfig({children}) {
     return (
         <ThemeContext.Provider value={config}>
             {children}
         </ThemeContext.Provider>
     )
 }
 