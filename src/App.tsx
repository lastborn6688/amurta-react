import React from 'react'
import './App.css'
import image from './assets/portugal_v_slovakia_group_j_-_uefa_euro_2024_european_qualifiers-removebg-preview.png'
import Greetings from './component/Greetings'

const App = () => {
  const firstName= 'Christiano'
  const lastName = 'Ronaldo'
  const handleclick = () => {
    alert('Hello World')
  }
  const capitalise=(text) =>{
    return text.toUpperCase()
  }

  return (
    <div className='app'>
            <img src={image} />
      <button onClick={handleclick} >click here for ronaldo</button>
      <p>{capitalise(firstName)} {lastName}</p>
      {firstName === 'Christiano' ? <p>Welcome to the game</p> : <p>Who are you?</p>}
      <Greetings />
          </div>
  )
}

export default App
