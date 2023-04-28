
import React from "react";
import {menuItem} from "./menuData" 
import './navbar.css';

const Navbar = () =>{
    return(
        <div className="navbar-section">
            <div className="container">
                <div className="logo-wrapper">
                    <h4>AVINASH</h4>
                </div>
                <div className="menu-item-list">
                    {menuItem.map((menuItem, key) => {
                        return (
                            <li className="menu-item" key={menuItem.id}>
                                {menuItem.menu_Item}
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Navbar;