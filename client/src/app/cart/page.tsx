'use client'
import { useCartContext } from '@/context/CartContext'
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import CartItem from '../component/CartItem';
import { useUserContext } from '@/context/UserContext';
import Link from 'next/link';

const Page = () => {
    const {userCart}=useCartContext();
    const {isLoggedIn}=useUserContext()
    console.log(userCart)

   

  // if(sessionStorage.getItem("user")?.length===0 || sessionStorage.getItem("user")===null || sessionStorage.getItem("user")===""){
  //   return(
  //     <>
  //    <div>Please login to see your cart...</div>
  //     </>
  //   )
  // }
   

  // if(userCart.length==0 && (sessionStorage.getItem("user")?.length===0 || sessionStorage.getItem("user")===null || sessionStorage.getItem("user")==="")){
  //   return(
  //     <>
  //       <div>No items in cart</div>
  //     </> )
  // }


  return (
    <div>
        <hr></hr>
        <table className='w-full'>
          <thead className='bg-[#3C4242]'>
            <tr style={{color:"white"}}>
              <th>PRODUCT DETAILS</th>
              <th>PRICE</th>
              <th>QUANTITTY</th>
              <th>SHIPPING</th>
              <th>SUBTOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className='container mx-auto py-3'>
            {
              userCart.map((curElem:any)=>{
                return <CartItem key={curElem.id} {...curElem}></CartItem>
              })
            }
          </tbody>
        </table>
        
            <section className='bg-[#F6F6F6]'>
              <div className='container mx-auto py-11'>
                <div className='flex'>
                <div className='basis-1/2'>
                  <p className='font-semibold'>Discount Codes</p>
                  <p>Enter your coupon code if you have one</p>
                  <div>
                    <input type="text" className='rounded-l-md p-2'/>
                    <button className='bg-[#8A33FD] rounded-r-md py-2 px-8' style={{color:"white"}}>Apply Coupon</button>
                  </div>
                  <button className='py-3 px-12 rounded-md border border-[#BEBCBD] decoration-[#3C4242] bg-[#fff]'><Link href="/products">Continue Shopping</Link></button>
                </div>
                <div className='basis-1/2'>
                  <div className=''>
                    <div>

                    <table className='mx-auto'>
                      <tr>
                        <td className='p-2'>Sub Total </td>
                        <td className='p-2'>$513.00</td>

                      </tr>

                      <tr>
                        <td className='p-2'>Shipping </td>
                        <td className='p-2'>$0.00</td>

                      </tr>

                      <tr>
                        <td className='py-4 px-2'>Grand Total </td>
                        <td className='py-4 px-2'>$518.00</td>

                      </tr>

                    </table>
                  <hr className='border-b-1 border-[#BEBCBD] w-[50%] mx-auto mt-3 mb-4'/>
                    </div>
                  <div className='text-center'>
                  <button className='bg-[#8A33FD] rounded-md p-3 mx-auto' style={{color:"white"}}>Proceed To Checkout</button>

                  </div>
                  
                  </div>
                 
                </div>
                </div>
              
              </div>
                

            </section>

        
    </div>
  )
}

export default Page
