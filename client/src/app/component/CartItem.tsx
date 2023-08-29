"use client"
import React from 'react'
import {useState} from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import { useCartContext } from '@/context/CartContext'

const CartItem = ({id,image,name,price,color,amount,stock,size}:any) => {
  const {increaseItem,decreaseItem,removeItem}=useCartContext()
  const [productAmount, setproductAmount] = useState(amount)
  console.log(id)
  console.log(productAmount)

  const setDecrease=()=>{
    console.log(id)
    if(productAmount>1){
      setproductAmount((productAmount:number)=>productAmount-1)
      decreaseItem({id:id,productAmount:productAmount-1})
    }
    
  }

  const setIncrease=()=>{
    console.log(id)
    if(productAmount<stock){
      setproductAmount((productAmount:number)=>productAmount+1)
    increaseItem({id:id,productAmount:productAmount+1})
    }
    
  }

  return (
    <tr className='border-t-2 border-[#BEBCBD]'>
      <td className='text-center flex flex-row'>
        <div className='basis-2/6'>
        <img src={image} className='w-[105px] h-[120px] rounded-md inline'></img>

        </div>
        <div className='basis-4/6 text-left'>
        <p className='decoration-[#3C4242] font-bold'>{name}</p>
        <p className='rounded-full h-6 w-6 mx-2 border border-[#000]' style={{backgroundColor:color}}></p>
        <p className=''>Size : {size}</p>
        </div>
        </td>
      <td className='text-center'>{price}</td>
      <td className='text-center'><FaMinus className='inline' onClick={setDecrease}></FaMinus>{productAmount}<FaPlus className='inline' onClick={setIncrease}></FaPlus></td>
      <td className='text-center'>Free</td>
      <td className='text-center'>{productAmount*price}</td>
      <td className='text-center'><RiDeleteBinLine className='inline' onClick={()=>removeItem(id)}></RiDeleteBinLine></td>
    </tr>
  )
}

export default CartItem
