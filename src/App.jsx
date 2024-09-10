import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameForm from './UsernameForm'
import BetterSignUpForm from './BetterSignUpForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
import FormDemo from './FormDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FormDemo /> */}
      {/* <UsernameForm /> */}
      {/* <BetterSignUpForm /> */}
      <ShoppingList />
      {/* <ShoppingListForm /> */}
    </>
  )
}

export default App
