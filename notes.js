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



// let Y = (prop) => {
//     return (
//             <div className="cart">
//         <img className="cart-img" src="https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg" />

//         <div className="cart-details">

//             <h3>- {prop.name}</h3>
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
//     <Y name="rumaan restaurent"/>
//     <Y name="ali restaurent"/>
//     <Y name="madina restaurent"/>
//     <Y name="akbar restaurent"/>
//     <Y name="shah ghous restaurent"/>
//     <Y name="shadaab restaurent"/>
//     <Y name="malik restaurent"/>
//     <Y name="javed restaurent"/>



//         </div>
//         <div className="footer">
//             Copy right
//         </div>
//     </div>
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Restaurent />)












// import React from "react"
// import ReactDOM from "react-dom/client"

// let App = ()=>{
//     let arr = [
//         {
//             id: 1,
//             name: "suleman",
//             age: 19
//         },
//         {
//             id: 2,
//             name: "armaaan",
//             age: 19
//         },
//         {
//             id: 3,
//             name: "malik",
//             age: 19
//         }
//     ]

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
//     }
//     return <div>
//         {arr.map((e)=>{
//             return <Card key={e.id} name={e.name}/>
//         })}
//     </div>


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<App/>)








// let h1 = React.createElement("h1",{},"hi")
// let arr = [
//         {
//         id: 1,
//         name: "rumaan",
//         rating: 4.5,
//         title: "chicken Biryani"
//     },
//     {
//             id: 2,
//             name: "anmol",
//             rating: 4.9,
//             title: "chicken Biryani"
//         },
//         {
//                 id: 3,
//                 name: "malik",
//                 rating: 3.5,
//                 title: "chicken Biryani"
//             },
//             {
//                     id: 4,
//                     name: "shah ghouse",
//                     rating: 4.5,
//                     title: "chicken Biryani"
//                 },
//                 {
//                         id: 5,
//         name: "shadab",
//         rating: 2.5,
//         title: "chicken Biryani"
//     },
// ]






// import React from "react"
// import ReactDOM from "react-dom"

// let item = ["1","2"]

// let X = (p)=>{
//     return <div> {p.name}</div>
// }


// let Card = ()=>{
//    return 
//         item.map((e)=>{

//             return <X name={e} />   
//         })

// }

// let root = React.createRoot(document.querySelector("#root"))
// root.render(<Card/>)














// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// import React from "react"
// import ReactDOM from "react-dom/client"
// import Url from './components/url.js'

// let arr = [
//         { 
//                 img : "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg",
//                 id: 1,
//                 name: "rumaan restaurent ",
//                 rating: 4.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse2.mm.bing.net/th/id/OIP.0csI89pXHQSxumqiZz_tIwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 2,
//         name: "anmol restaurent ",
//         rating: 4.9,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://gimmedelicious.com/wp-content/uploads/2023/04/Images-23.jpg",
//         id: 3,
//         name: "malik restaurent ",
//         rating: 3.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://th.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 4,
//         name: "shah ghouse restaurent ",
//         rating: 4.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse2.mm.bing.net/th/id/OIP.M4jyRFj5ScV6Nhu38aWKcAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 5,
//         name: "shadab restaurent ",
//         rating: 2.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://th.bing.com/th/id/OIP.syVy2SWsLlXMaZ65MB71PQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 6,
//         name: "faizan restaurent ",
//         rating: 4.2,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
//         id: 7,
//         name: "azhar restaurent ",
//         rating: 3.8,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse4.mm.bing.net/th/id/OIP._RESkVnOC1CrklZqxHnS7gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 8,
//         name: "imran restaurent ",
//         rating: 4.7,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-02.jpg.webp",
//         id: 9,
//         name: "sameer restaurent ",
//         rating: 3.2,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://th.bing.com/th/id/OIP.JGi5aYcRGN5jbM4PPWnAxwHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 10,
//         name: "uzair restaurent ",
//         rating: 4.1,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse4.mm.bing.net/th/id/OIP.AB-yUQQBiZRVR1eruYgeagHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 11,
//         name: "adil restaurent ",
//         rating: 4.8,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse3.mm.bing.net/th/id/OIP.fegkWtspwLLy76wvnT9bUgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 12,
//         name: "faheem restaurent",
//         rating: 3.9,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://www.sadia-life.com/media/nyrjqv4j/6-chicken-biryani-web.jpg",
//         id: 13,
//         name: "sohail restaurent ",
//         rating: 2.8,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg",
//         id: 14,
//         name: "danish restaurent ",
//         rating: 4.6,
//         title: "chicken Biryani"
//     },
//     { 
//         id: 15,
//         img : "https://img.magnific.com/premium-photo/layered-biryani-with-chicken-rice-spices_1179130-437542.jpg?w=2000",
//         name: "arslan restaurent ",
//         rating: 3.6,
//         title: "chicken Biryani"
//     }, { 
//         img : "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg",
//         id: 17,
//         name: "danish restaurent ",
//         rating: 4.6,
//         title: "chicken Biryani"
//     }
// ];




// let X = (p) => {
//     return (
//         <div className="cart">
//             <img className="cart-img" src= {p.img} />

//             <div className="cart-details">

//                 <h3>-{p.name}</h3>
//                 <h3>-{p.title} </h3>
//                 <h3>- {p.rating} </h3>
//             </div>
//         </div>
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

//             {arr.map((e) => {
//                 return <X name={e.name} key={e.id} rating={e.rating} title={e.title} img={e.img} />
//             })}

//         </div>
//         <div className="footer">
//             Copy right
//         </div>
//     </div>
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Restaurent />)


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react'
// import React from 'react'
// import ReactDOM from 'react-dom/client'


// const App = ()=>{
//     const [count,setcount] = useState(0);
//     return(
//     <div>


//         <h1>{count}</h1>
//         <button onClick={()=>{
//             setcount(count + 1)
//         }} > Click me </button>



//         </div>
//     )
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(<App/>)






// import React, { useEffect, useState } from 'react'
// import ReactDOM from "react-dom/client"
// const Notes = () => {

//     const [count, setCount] = useState(0)
//     const [text, setText] = useState('hi')
//     const [style, setStyle] = useState({ backgroundColor: "transparent" })
//     useEffect(() => {
//         let x = document.title = "NewTitle"
//         console.log("i am useeffect")
//     }, []);
//     return (
//         <div>
//             <h1 style={style} >{count}</h1>
//             <h1 >{text}</h1>
//             <button onClick={() => {
//                 setCount(count + 1)
//                 setStyle({ backgroundColor: "red" })
//       }}>click me to increase</button>



//             <button onClick={() => {
//                 setCount(count - 1)
//                 setStyle({ backgroundColor: "pink" })
//             }}>click me to decrease</button>







//             <button onClick={() => {
//                 setText("welcome to react")
//             }}>click me to see  </button>






//             <button onClick={() => {
//                 setStyle({ backgroundColor: "red" })
//             }}>click me to see   style </button>
//         </div>
//     )
// }

// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Notes />)








// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import { swiggyUrl } from './components/url'
// import Cards from './components/cards.js'
// import '/notes.css'

// const App = () => {

//     const [url, setUrl] = useState([])
//     async function urlfunc() {
//         let response = await fetch(swiggyUrl)
//         let data = await response.json()


//         setUrl(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//             ?.restaurants,)
//     }
//     useEffect(() => {
//         urlfunc()
//     }, [])

//     return <div>

//           <div className="header">

//            <img className="head-logo" src="https://img.magnific.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />

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
// <button onClick={()=>{
//     let filterArr = url.filter((e)=>{
//         return e.info.avgRating > 4.2
//     }) 
//     setUrl(filterArr)
// }}> click me to explore top restaurants</button>
//      <div className='res-container'>
//         {url.map((elem)=>{
//             return <Cards resDetails={elem} key={elem.info.id} />
//         })}
//     </div>
//  <div className="footer">
//             Copy right
//         </div>

//         </div>
// }

// let root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(<App />)













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



// let Y = (prop) => {
//     return (
//             <div className="cart">
//         <img className="cart-img" src="https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg" />

//         <div className="cart-details">

//             <h3>- {prop.name}</h3>
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
//     <Y name="rumaan restaurent"/>
//     <Y name="ali restaurent"/>
//     <Y name="madina restaurent"/>
//     <Y name="akbar restaurent"/>
//     <Y name="shah ghous restaurent"/>
//     <Y name="shadaab restaurent"/>
//     <Y name="malik restaurent"/>
//     <Y name="javed restaurent"/>



//         </div>
//         <div className="footer">
//             Copy right
//         </div>
//     </div>
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Restaurent />)












// import React from "react"
// import ReactDOM from "react-dom/client"

// let App = ()=>{
//     let arr = [
//         {
//             id: 1,
//             name: "suleman",
//             age: 19
//         },
//         {
//             id: 2,
//             name: "armaaan",
//             age: 19
//         },
//         {
//             id: 3,
//             name: "malik",
//             age: 19
//         }
//     ]

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
//     }
//     return <div>
//         {arr.map((e)=>{
//             return <Card key={e.id} name={e.name}/>
//         })}
//     </div>


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<App/>)








// let h1 = React.createElement("h1",{},"hi")
// let arr = [
//         {
//         id: 1,
//         name: "rumaan",
//         rating: 4.5,
//         title: "chicken Biryani"
//     },
//     {
//             id: 2,
//             name: "anmol",
//             rating: 4.9,
//             title: "chicken Biryani"
//         },
//         {
//                 id: 3,
//                 name: "malik",
//                 rating: 3.5,
//                 title: "chicken Biryani"
//             },
//             {
//                     id: 4,
//                     name: "shah ghouse",
//                     rating: 4.5,
//                     title: "chicken Biryani"
//                 },
//                 {
//                         id: 5,
//         name: "shadab",
//         rating: 2.5,
//         title: "chicken Biryani"
//     },
// ]






// import React from "react"
// import ReactDOM from "react-dom"

// let item = ["1","2"]

// let X = (p)=>{
//     return <div> {p.name}</div>
// }


// let Card = ()=>{
//    return 
//         item.map((e)=>{

//             return <X name={e} />   
//         })

// }

// let root = React.createRoot(document.querySelector("#root"))
// root.render(<Card/>)














// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// import React from "react"
// import ReactDOM from "react-dom/client"
// import Url from './components/url.js'

// let arr = [
//         { 
//                 img : "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg",
//                 id: 1,
//                 name: "rumaan restaurent ",
//                 rating: 4.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse2.mm.bing.net/th/id/OIP.0csI89pXHQSxumqiZz_tIwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 2,
//         name: "anmol restaurent ",
//         rating: 4.9,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://gimmedelicious.com/wp-content/uploads/2023/04/Images-23.jpg",
//         id: 3,
//         name: "malik restaurent ",
//         rating: 3.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://th.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 4,
//         name: "shah ghouse restaurent ",
//         rating: 4.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse2.mm.bing.net/th/id/OIP.M4jyRFj5ScV6Nhu38aWKcAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 5,
//         name: "shadab restaurent ",
//         rating: 2.5,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://th.bing.com/th/id/OIP.syVy2SWsLlXMaZ65MB71PQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 6,
//         name: "faizan restaurent ",
//         rating: 4.2,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
//         id: 7,
//         name: "azhar restaurent ",
//         rating: 3.8,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse4.mm.bing.net/th/id/OIP._RESkVnOC1CrklZqxHnS7gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 8,
//         name: "imran restaurent ",
//         rating: 4.7,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-02.jpg.webp",
//         id: 9,
//         name: "sameer restaurent ",
//         rating: 3.2,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://th.bing.com/th/id/OIP.JGi5aYcRGN5jbM4PPWnAxwHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 10,
//         name: "uzair restaurent ",
//         rating: 4.1,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse4.mm.bing.net/th/id/OIP.AB-yUQQBiZRVR1eruYgeagHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 11,
//         name: "adil restaurent ",
//         rating: 4.8,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://tse3.mm.bing.net/th/id/OIP.fegkWtspwLLy76wvnT9bUgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//         id: 12,
//         name: "faheem restaurent",
//         rating: 3.9,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://www.sadia-life.com/media/nyrjqv4j/6-chicken-biryani-web.jpg",
//         id: 13,
//         name: "sohail restaurent ",
//         rating: 2.8,
//         title: "chicken Biryani"
//     },
//     { 
//         img : "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg",
//         id: 14,
//         name: "danish restaurent ",
//         rating: 4.6,
//         title: "chicken Biryani"
//     },
//     { 
//         id: 15,
//         img : "https://img.magnific.com/premium-photo/layered-biryani-with-chicken-rice-spices_1179130-437542.jpg?w=2000",
//         name: "arslan restaurent ",
//         rating: 3.6,
//         title: "chicken Biryani"
//     }, { 
//         img : "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg",
//         id: 17,
//         name: "danish restaurent ",
//         rating: 4.6,
//         title: "chicken Biryani"
//     }
// ];




// let X = (p) => {
//     return (
//         <div className="cart">
//             <img className="cart-img" src= {p.img} />

//             <div className="cart-details">

//                 <h3>-{p.name}</h3>
//                 <h3>-{p.title} </h3>
//                 <h3>- {p.rating} </h3>
//             </div>
//         </div>
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

//             {arr.map((e) => {
//                 return <X name={e.name} key={e.id} rating={e.rating} title={e.title} img={e.img} />
//             })}

//         </div>
//         <div className="footer">
//             Copy right
//         </div>
//     </div>
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Restaurent />)


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react'
// import React from 'react'
// import ReactDOM from 'react-dom/client'


// const App = ()=>{
//     const [count,setcount] = useState(0);
//     return(
//     <div>


//         <h1>{count}</h1>
//         <button onClick={()=>{
//             setcount(count + 1)
//         }} > Click me </button>



//         </div>
//     )
// }


// let root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(<App/>)






// import React, { useEffect, useState } from 'react'
// import ReactDOM from "react-dom/client"
// const Notes = () => {

//     const [count, setCount] = useState(0)
//     const [text, setText] = useState('hi')
//     const [style, setStyle] = useState({ backgroundColor: "transparent" })
//     useEffect(() => {
//         let x = document.title = "NewTitle"
//         console.log("i am useeffect")
//     }, []);
//     return (
//         <div>
//             <h1 style={style} >{count}</h1>
//             <h1 >{text}</h1>
//             <button onClick={() => {
//                 setCount(count + 1)
//                 setStyle({ backgroundColor: "red" })
//       }}>click me to increase</button>



//             <button onClick={() => {
//                 setCount(count - 1)
//                 setStyle({ backgroundColor: "pink" })
//             }}>click me to decrease</button>







//             <button onClick={() => {
//                 setText("welcome to react")
//             }}>click me to see  </button>






//             <button onClick={() => {
//                 setStyle({ backgroundColor: "red" })
//             }}>click me to see   style </button>
//         </div>
//     )
// }

// let root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(<Notes />)








import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { swiggyUrl } from './components/url'
import Cards from './components/cards.js'
import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
import  FilterBtn from './components/FilterBtn.js'
import '/notes.css'
import Shimmer from './components/Shimmer.js'

const App = () => {

    const [url, setUrl] = useState(null)
    async function urlfunc() {
        let response = await fetch(swiggyUrl)
        let data = await response.json()


        setUrl(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,)
    }
   
    useEffect(() => {
        urlfunc()
    }, []);

    return <div>
        
        <Header /> 
        <FilterBtn url={url} setUrl = {setUrl}/>
        <Body url={url} />
        {/* <Shimmer/> */}
        <Footer /> 
       
    </div>
}

let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)