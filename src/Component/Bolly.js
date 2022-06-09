import React, { useContext } from 'react'
import  {grishma}  from './Api'
const Bolly = () => {
  const [data,setData]= useContext(grishma)
  return (
    <div>
    {data.map(item=><img src={item.ImageAsset} alt='bollyimg'/>)}
    </div>
  )
}

export default Bolly