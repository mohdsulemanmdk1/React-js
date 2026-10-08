import React from 'react'
import Card from './cards.js'
import Shimmer from './Shimmer.js'
const Body = ({url}) => {
    if(url == null){
       return <div className='shimmer-container'>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
       </div>
    }
  return (
    <div>
       <div className='res-container'>
      
                      {url.map((elem) => {
                          return <Card resDetails={elem} key={elem.info.id} />
                      })}
      
              </div>
    </div>
  )
}

export default Body
