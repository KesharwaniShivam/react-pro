

import './App.css'
import Login from './component/Login'
import Welcome_userDetails from './component/Welcome_userDetails'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Login</h1>
      <Login/>
      <Welcome_userDetails/>
    </UserContextProvider>
  )
}

export default App
