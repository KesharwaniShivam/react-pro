import { useEffect, useState } from 'react'

import Container from './components/Container';
import { ThemeProvider } from './context/ChangeThemeContext';


function App() {
  
  const [themeMode, setThemeMode] = useState("light");
  
 
// this is only functionality
  const lightMode = ()=>{
    setThemeMode("light")
  }

  const darkMode = ()=>{
    setThemeMode("dark")
  }

  
// change in html process starts here

useEffect(() => {
  
document.querySelector('html').classList.remove("light", "dark"); //pehle jo bhi hai remove krdo then add 

document.querySelector('html').classList.add(themeMode)

}, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
     <Container/>
    </ThemeProvider>
  )
}

export default App
