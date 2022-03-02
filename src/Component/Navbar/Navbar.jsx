import React from 'react'
import img from '../../Asset/menu.png';
import { Navstyle } from './Navbar.style';


function Navbar() {
    return (
        <Navstyle>
            <article className='navbar'>
                <h1>MDN</h1>
                <img src={img} alt="image" />
            </article>
        </Navstyle>
    )
}

export default Navbar;