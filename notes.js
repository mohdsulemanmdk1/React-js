// let h1 = React.createElement("h1",{},"React DAY 0")
// let x = ReactDOM.createRoot(document.getElementById("root"))
// x.render(h1)


// import React from "react"
// import ReactDOM from "react-dom/client"


// let h1 = React.createElement("h1",{},React.createElement("div",{},React.createElement("h1",{},"i am nested h1")))
// let x = ReactDOM.createRoot(document.getElementById("root"))
// x.render(h1)
// console.log(h1)






// let p = React.createElement("h1",{},"from react")
// let x = ReactDOM.createRoot(document.querySelector("#root"))


// x.render(p)







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const profileCard = (
//     <div> 
//         <p>hi </p>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(profileCard);




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// const Notes = () => {
//   return (
//     <div>
// phell
//     </div>
//   )
// }

// let x = ReactDOM.createRoot(document.querySelector("#root"))

// x.render(<Notes/>)




// import React from "react"
// import ReactDOM from "react-dom/client"

// let N = (
//     <div>hi from react not from html</div>
// )
// let x = ReactDOM.createRoot(document.querySelector("#root"))
// x.render(N)



// import React from "react"
// import ReactDOM from "react-dom/client"

// // let h1 = React.createElement("h1",{},"hi")
// let X = () => {
//     return (
//             <div className="cart">
//         <img className="cart-img" src="https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg" />

//         <div className="cart-details">

//             <h3>-Lucky Restaurent</h3>
//             <h3>-Chicken Biryani</h3>
//             <h3>-Rating 4.7</h3>
//         </div>
//     </div>
//     )
// }
// let Restaurent = () => {
//     return <div>
//         <div className="header">

//             <img className="head-logo" src="https://img.magnific.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />

//             <input className="head-inp" placeholder="Search here..." />

//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>Carts</li>
//                     <li>About us</li>
//                     <li>Contact us</li>
//                 </ul>
//             </nav>
//         </div>

//         <div className="body">
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>
//     <X/>

//         </div>
//         <div className="footer">
//             Copy right
//         </div>
//     </div>
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Restaurent />)













import React from "react"
import ReactDOM from "react-dom/client"

// let h1 = React.createElement("h1",{},"hi")
let X = () => {
    return (
            <div className="cart">
        <img className="cart-img" src="https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg" />

        <div className="cart-details">

            <h3>-Lucky Restaurent</h3>
            <h3>-Chicken Biryani</h3>
            <h3>-Rating 4.7</h3>
        </div>
    </div>
    )
}



let Y = (prop) => {
    return (
            <div className="cart">
        <img className="cart-img" src="https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg" />

        <div className="cart-details">

            <h3>- {prop.name}</h3>
            <h3>-Chicken Biryani</h3>
            <h3>-Rating 4.7</h3>
        </div>
    </div>
    )
}



let Restaurent = () => {
    return <div>
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

        <div className="body">
    <X/>
    <X/>
    <Y name="rumaan restaurent"/>
    <Y name="ali restaurent"/>
    <Y name="madina restaurent"/>
    <Y name="akbar restaurent"/>
    <Y name="shah ghous restaurent"/>
    <Y name="shadaab restaurent"/>
    <Y name="malik restaurent"/>
    <Y name="javed restaurent"/>
  
 

        </div>
        <div className="footer">
            Copy right
        </div>
    </div>
}


let root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<Restaurent />)