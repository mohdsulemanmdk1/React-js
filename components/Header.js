import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <div>
      <div className="header">

            <img className="head-logo" src="https://img.magnific.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />

            <input className="head-inp" placeholder="Search here..." />

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Carts</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
