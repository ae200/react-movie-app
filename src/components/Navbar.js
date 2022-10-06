import React from 'react';
import logo3 from '../images/logo3.png';
import {links} from './Data'

function Navbar() {
 const handleClick = (e) => {
  const target = e.target.getAttribute('href');
  
 }
  return (
    <nav className='navbar sticky'>
     <div className='nav-center'>
      <img src={logo3} alt='smooth scroll'/>
      {/* links */}
      <div>
       {links.map( (link) => {
        return <a href={link.url} key={link.id} onClick={handleClick}>
         {link.text}         
        </a>
       })}
      </div>
     </div>
    </nav>
  )
}

export default Navbar