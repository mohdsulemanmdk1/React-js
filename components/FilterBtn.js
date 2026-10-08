import React from 'react'
// import {url} from './url.js'
const FilterBtn = ({url,setUrl}) => {
  return (
    <div>
      <button onClick={() => {
            let filterArr = url.filter((e) => {
                return e.info.avgRating > 4.2
            })
            setUrl(filterArr)
        }}> click me to explore top restaurants</button>
    </div>
  )
}

export default FilterBtn
