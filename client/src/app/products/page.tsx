"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useAppContext } from '@/context/AppContext'
import {  useParams, useRouter } from 'next/navigation'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import Link from 'next/link'
import { useFilterContext } from '@/context/FilterContext'
import DressTypes from '../component/DressTypes'
import Companies from '../component/Companies'
// import Products from '../component/Products'
const Page = () => {
  const {apiloading}=useAppContext()
  const {products,filterProducts,updateFilterValue,uniqueColors,unique_types,uniqueSizes,uniqueCompanies,clearFilter,minimum_price,maximum_price,uniqueCategories,filters}=useFilterContext()
  const [color, setcolor] = useState<any>([])

  const [selectedCategory,setselectedCategory]=useState(uniqueCategories[0])
const router=useRouter()
const routeParams = useParams();
  const handleSingleProduct=({product}:any)=>{
    router.push(`singleproduct/${product.id}`)
  }

 useEffect(()=>{
  if(uniqueCategories!==undefined || uniqueCategories!==null || uniqueCategories.length!==0){
    setselectedCategory(uniqueCategories[0])
  }
 },[products])

  if(apiloading===true || products.length===0){
    return <div>Loading...</div>
  }
  return (
    <>
    <section className='container mx-auto'>

      <div className='flex flex-row'>
        <div className='basis-3/12'>
          <section className='px-5'>
            <div className=''>
              <div className='mt-8 mb-12 grid grid-cols-2'>
              <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Filter</h3>
              <div>

              <img src="filter.png" alt="" className='inline'/>
              </div>

              </div>
              <div className=''>

                {
                  unique_types.map((curType:any)=>{
                    return <DressTypes type={curType} key={curType}></DressTypes>
                  })
                }

      
              </div>
              
            </div>



          <div className=''>
            <div className='mt-8 mb-5'>
            <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Price</h3>
            </div>
            <hr className='mb-8 decoration-[#BEBCBD]'/>
            <div>
          <input type="range" name="price" min={minimum_price} max={maximum_price} value={filters.price} onChange={updateFilterValue}/>
          <div className='grid grid-cols-2 gap-3 mt-6'>
              <div>
              <button className='rounded-lg border border-[#BEBCBD] px-5 py-2' style={{color:"#3C4242"}}><span>${minimum_price}</span></button>
              </div>
              <div>
              <button className='rounded-lg border border-[#BEBCBD] px-5 py-2' style={{color:"#3C4242"}}><span>${maximum_price}</span></button>
              </div>

          </div>
            </div>
          </div>


          <div className=''>
            <div className='mt-8 mb-5'>
            <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Sizes</h3>
            </div>
            <hr className='mb-8 decoration-[#BEBCBD]'/>
            <div className='grid grid-cols-4 px-5'>
              {
                uniqueSizes.map((curSize:any)=>{
                    return(
                       <button name="size" onClick={updateFilterValue} value={curSize} key={curSize} className='h-9 w-9 rounded rounded-lg mb-4 border-2 border-[#000]'>
                          {curSize}
                       </button>)
                })
              }
            </div>
          </div>


            <div className=''>
            <div className='mt-8 mb-5'>
            <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Colors</h3>
            </div>
            <hr className='mb-8 decoration-[#BEBCBD]'/>
            <div className='grid grid-cols-4 px-5'>
              {
                uniqueColors.map((curColor:any)=>{
                    return(
                       <button name="color" key={curColor} onClick={updateFilterValue} value={curColor} className='h-9 w-9 rounded rounded-lg mb-4 border-2 border-[#000]' style={{backgroundColor:curColor}}>

                       </button>)
                })
              }
            </div>
          </div>



        


        <div className=''>
              <div className='mt-8 mb-12 grid grid-cols-2'>
              <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Company</h3>
              <div>

              <img src="filter.png" alt="" className='inline'/>
              </div>

              </div>
              <div className=''>
                
                {
                  uniqueCompanies.map((curCompany:any)=>{
                    return <Companies company={curCompany} key={curCompany}></Companies>
                  })
                }

      
              </div>
              
            </div>


            <div>
              <button onClick={clearFilter} className='py-3 px-20 my-11 bg-[#8A33FD]' style={{color:"#fff"}}>Clear Filter</button>
            </div>

          </section>
        </div>
        <div className='basis-9/12'>
                <div className='flex flex-row my-8 pr-14'>
                    <div className='basis-1/2'>
                      {
                        uniqueCategories.map((curCategory:any)=>{
                          if(curCategory===selectedCategory){
                            return  <span key={curCategory} className='inline mx-4' style={{color:"#8A33FD"}} onClick={()=>setselectedCategory(curCategory)}>{curCategory.charAt(0).toUpperCase() + curCategory.slice(1)}</span>
                          }else{
                            return  <span key={curCategory} className='inline mx-4' onClick={()=>setselectedCategory(curCategory)}>{curCategory.charAt(0).toUpperCase() + curCategory.slice(1)}</span>
                            
                          }
                          
                        })
                      }
                   
                      {/* <span className='mx-4' onClick={(e:any)=>selectedCategory("women's category")}>Women's Clothing</span> */}
                      </div>
                    <div className='basis-1/2 text-right'>
                        <span className='inline mr-2' style={{color:"#8A33FD"}}>New</span>
                        <span className='inline' style={{color:"#3F4646"}}>Recommended</span>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2 pb-8 sm:px-2 lg:px-0 lg:gap-6 2xl:gap-1'>
                    {
                        filterProducts && filterProducts.length && filterProducts.map((product:any)=>{
                            return(
                              <Link href={`/singleproduct/${product.id}`} key={product.id}>
                                <div className='mx-auto my-8 md:my-4 2xl:my-8'>
                                    <img src={product.image} className='sm:w-[169px] sm:h-[222px] md:w-[211px] md:h-[277px] lg:w-[282px] lg:h-[370px] rounded-lg' />
                                    <div className='grid grid-cols-3 lg:grid-cols-2 mt-4'>
                                      <div className='col-span-2 lg:col-span-1'>
                                      <p style={{color:"#3C4242"}} className='text-xs lg:text-sm font-medium 2xl:font-semibold 2xl:text-base'>{product.name}</p>
                                      {
                                        product.comapny!=="" && product.company.length!==0?<p style={{color:"#807D7E"}} className='text-[10px] lg:text-xs font-normal 2xl:font-medium 2xl:text-sm'>{product.company}</p>:null
                                      }
                                    
                                      </div>
                                      <div className='bg-[#F6F6F6] py-1 mx-auto lg:py-2'>
                                        <p className='font-bold text-[10px] lg:text-sm' style={{color:"#3C4242"}}>${product.discount_price==0?product.actual_price:product.discount_price}</p>
                                      </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
                </div>
      </div>
    </section>
   
    </>
  )
}

export default Page
