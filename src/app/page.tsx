import React from 'react'
import Button from "@/components/user/Button"
import {v4 as uuidv4} from "uuid"


const adminPagesButton = [
  {name:"main admin",href:"/admin"},
  {name:"owner portel",href:"/owner"},
  {name:"agent protel",href:"/agent"},
  {name:"agency protel",href:"/agency"},
]

export default function page() {
  return (
    <>
    {adminPagesButton.map((item)=> (
      <div className='flex' key={uuidv4()}>

        <Button text={item.name} href={item.href}/> 
      </div>
    ))}
    </>
   
  )
}
