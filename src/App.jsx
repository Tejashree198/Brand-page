import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'

function App() {
  

  return (
   <div>
     <nav className='container'>
         <div className="logo">
           <img src='https://media.about.nike.com/img/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjozMzQsInRvcCI6MCwid2lkdGgiOjQwOTAsImhlaWdodCI6MjcyOH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%3D%3D&s=9a07c8b736cf820f829f906d948eaffea72c5422c88d965fc6732d5d6a9c8b05' alt='logo'/>
         </div>
      
    <ul className="nav-links" >
      <li>Home</li>
      <li>Search</li>
      <li>About</li>
      <button>Login</button>
    </ul>
    </nav>
    <Hero/>
   </div>
  
  )
}

export default App
