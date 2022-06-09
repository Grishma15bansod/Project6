import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
           <Link to="/bolly"><li>Bollywood</li></Link> 
           <Link to="/tech"><li>Technology</li></Link>    
           <Link to="/Holly"><li>Hollywood</li></Link>    
           <Link to="/fitness"><li>Fitness</li></Link>  
           <Link to="/food"><li>Food</li></Link>    
        </ul>
    </div>
  )
}

export default Home