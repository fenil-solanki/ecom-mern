"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useAppContext } from '@/context/AppContext'
import { useParams, useRouter } from 'next/navigation'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Link from 'next/link'
import { useFilterContext } from '@/context/FilterContext'
import DressTypes from '../component/DressTypes'
import RatingStar from '../component/RatingStar'
import Companies from '../component/Companies'


const Page = () => {
  const { apiloading } = useAppContext()
  const { products, filterProducts, updateFilterValue, uniqueColors, unique_types, uniqueSizes, uniqueCompanies, clearFilter, minimum_price, maximum_price, uniqueCategories, filters } = useFilterContext()
  const [color, setcolor] = useState<any>([])

  const [selectedCategory, setselectedCategory] = useState(uniqueCategories[0])
  const router = useRouter()
  const routeParams = useParams();
  const handleSingleProduct = ({ product }: any) => {
    router.push(`singleproduct/${product.id}`)
  }

  

  useEffect(() => {
    if (uniqueCategories !== undefined || uniqueCategories !== null || uniqueCategories.length !== 0) {
      setselectedCategory(uniqueCategories[0])
    }
  }, [products])

  if (apiloading === true || products.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <>
      <section className='container mx-auto'>

        <div className='grid grid-cols-12'>
          <div className='hidden col-span-3 sm:block'>
            <section className='px-2 sm:px-5'>
              <div className=''>
                <div className='mt-8 mb-2 sm:mb-4 lg:mb-12 grid grid-cols-2'>
                  <h3 className='inline font-semibold text-base sm:text-lg lg:text-2xl' style={{ color: "#807D7E" }}>Filter</h3>
                  <div className='text-center'>

                    <img src="filter.png" alt="" className='inline' />
                  </div>

                </div>
                <div className=''>

                  {
                    unique_types.map((curType: any) => {
                      return <DressTypes type={curType} key={curType}></DressTypes>
                    })
                  }


                </div>

              </div>



              <div className=''>
                <div className='mt-4 mb-2 sm:mt-8 sm:mb-4 lg:mb-5'>
                  <h3 className='inline font-semibold text-base sm:text-lg lg:text-2xl' style={{ color: "#807D7E" }}>Price</h3>
                </div>
                <hr className='mb-4 decoration-[#BEBCBD] md:mb-6 lg:mb-8' />
                <div>
                  <input type="range" name="price" min={minimum_price} max={maximum_price} value={filters.price} onChange={updateFilterValue} />
                  <div className='grid grid-cols-2 gap-3 mt-4 md:mt-6'>
                    <div>
                      <button className='rounded-lg text-[12px] border border-[#BEBCBD] px-0.5 py-1 md:px-1 md:py-2 w-full md:text-lg lg:text-xl lg:px-5' style={{ color: "#3C4242" }}><span>${minimum_price}</span></button>
                    </div>
                    <div>
                      <button className='rounded-lg text-[12px] border border-[#BEBCBD] px-0.5 py-1 md:px-1 md:py-2 w-full md:text-lg lg:text-xl lg:px-5' style={{ color: "#3C4242" }}><span>${maximum_price}</span></button>
                    </div>

                  </div>
                </div>
              </div>


              <div className=''>
                <div className='mt-4 mb-2 sm:mt-8 sm:mb-4 lg:mb-5'>
                  <h3 className='inline font-semibold text-base sm:text-lg lg:text-2xl' style={{ color: "#807D7E" }}>Sizes</h3>
                </div>
                <hr className='mb-4 decoration-[#BEBCBD] md:mb-6 lg:mb-8' />
                <div className='grid grid-cols-4 px-1 md:px-2 lg:px-5'>
                  {
                    uniqueSizes.map((curSize: any) => {
                      return (
                        <button name="size" onClick={updateFilterValue} value={curSize} key={curSize} className='h-6 w-6 text-[10px] rounded rounded-lg mb-2 border border-[#000] md:text-[14px] md:h-7 md:w-7 lg:text-xl lg:border-2 lg:h-9 lg:w-9 lg:mb-4'>
                          {curSize}
                        </button>)
                    })
                  }
                </div>
              </div>


              <div className=''>
                <div className='mt-4 mb-2 sm:mt-8 sm:mb-4 lg:mb-5'>
                  <h3 className='inline font-semibold text-base sm:text-lg lg:text-2xl' style={{ color: "#807D7E" }}>Colors</h3>
                </div>
                <hr className='mb-4 decoration-[#BEBCBD] md:mb-6 lg:mb-8' />
                <div className='grid grid-cols-4 px-1 md:px-2 lg:px-5'>
                  {
                    uniqueColors.map((curColor: any) => {
                      return (
                        <button name="color" key={curColor} onClick={updateFilterValue} value={curColor} className='h-6 w-6 rounded rounded-lg  mb-2 border border-[#000] md:h-7 md:w-7 lg:text-xl lg:border-2 lg:h-9 lg:w-9 lg:mb-4' style={{ backgroundColor: curColor }}>

                        </button>)
                    })
                  }
                </div>
              </div>






              <div className=''>
                <div className='mt-4 mb-2 sm:mt-8 sm:mb-4 grid grid-cols-2 lg:mb-5'>
                  <h3 className='inline font-semibold text-base sm:text-lg lg:text-2xl' style={{ color: "#807D7E" }}>Company</h3>
                  <div className='text-center'>

                    <img src="filter.png" alt="" className='inline' />
                  </div>

                </div>
                <div className=''>

                  {
                    uniqueCompanies.map((curCompany: any) => {
                      return <Companies company={curCompany} key={curCompany}></Companies>
                    })
                  }


                </div>

              </div>


              <div>
                <button onClick={clearFilter} className='py-2 px-4 text-xs my-6 bg-[#8A33FD] rounded-lg w-full sm:text-sm sm:py-3 sm:my-8 sm:px-6 md:text-base md:px-8 lg:w-auto lg:px-20 lg:text-xl lg:px-20 lg:my-11 lg:text-lg' style={{ color: "#fff" }}>Clear Filter</button>
              </div>

            </section>
          </div>
          <div className='col-span-12 sm:col-span-9'>
            <div className='grid grid-cols-1 mt-8 mb-4 sm:mb-8 sm:grid-cols-2  pr-4 2xl:pr-14'>
              <div className=''>
                {
                  uniqueCategories.map((curCategory: any) => {
                    if (curCategory === selectedCategory) {
                      return <span key={curCategory} className='inline mx-0 sm:mx-4 text-base md:text-lg lg:text-xl' style={{ color: "#8A33FD" }} onClick={() => setselectedCategory(curCategory)}>{curCategory.charAt(0).toUpperCase() + curCategory.slice(1)}</span>
                    } else {
                      return <span key={curCategory} className='inline mx-0 sm:mx-4 text-base md:text-lg lg:text-xl' onClick={() => setselectedCategory(curCategory)}>{curCategory.charAt(0).toUpperCase() + curCategory.slice(1)}</span>

                    }

                  })
                }

                {/* <span className='mx-4' onClick={(e:any)=>selectedCategory("women's category")}>Women's Clothing</span> */}
              </div>
              <div className='text-left sm:text-right'>
                <span className='inline mr-2 text-base md:text-lg lg:text-xl' style={{ color: "#8A33FD" }}>New</span>
                <span className='inline text-base md:text-lg lg:text-xl' style={{ color: "#3F4646" }}>Recommended</span>
              </div>
            </div>
            <div className='grid grid-cols-2 pb-8 sm:gap-2 sm:grid-cols-3 sm:px-2 lg:px-0 lg:gap-6 2xl:gap-1'>
              {
                filterProducts && filterProducts.length && filterProducts.map((product: any) => {
                  console.log(product.description)
                  return (
                    <Link href={`/singleproduct/${product.id}`} key={product.id}>
                      <div className='mx-auto px-2 sm:mx-0 my-2 md:my-4 2xl:my-8'>
                        <img src={product.image} className='mx-auto w-full h-[235px] md:h-[277px] lg:h-[370px] rounded-lg' />
                        <div className='mt-4'>
                          <div className=''>
                            <p style={{ color: "#3C4242" }} className='text-[12px] font-medium sm:text-xs lg:text-sm  2xl:font-semibold 2xl:text-base'>{product.name}</p>
                            {/* <p>{product.company}</p> */}
                            {
                                        product.comapny!=="" && product.company.length!==0?<p style={{color:"#807D7E"}} className='text-[12px] font-normal sm:text-[10px] lg:text-xs  2xl:font-medium 2xl:text-sm'>{product.company}</p>:null
                                      }


                            <p style={{ color: "#807D7E" }} className='text-[12px] font-normal hidden sm:block sm:text-[10px] lg:text-xs  2xl:font-medium 2xl:text-sm'>{product.description.length > 50 ? `${product.description.substring(0, 50)}...` : product.description}</p>


                          </div>
                          <div className='sm:py-1 sm:mx-auto lg:py-2'>
                            {
                              product.discount_rate !== 0 ? <>
                                <span className='text-[13px] mx-1 font-normal sm:text-[16px] lg:text-[16px]  2xl:font-medium 2xl:text-[16px]'>₹{product.discount_price}</span>
                                <span style={{ color: "#807D7E" }} className='text-[10px] mx-1 font-light sm:text-[15px] lg:text-[15px]  2xl:font-medium 2xl:text-[15px]'><s>₹{product.actual_price}</s></span>
                                <span style={{ color: "#807D7E" }} className='text-[9px] mx-1 font-light sm:text-[13px] lg:text-[13px]  2xl:font-medium 2xl:text-[13px]'>{product.discount_rate}% off</span>
                              </> : <p className='text-[13px] mx-1 font-normal sm:text-[16px] lg:text-[16px]  2xl:font-medium 2xl:text-[16px]' style={{ color: "#3C4242" }}>₹{product.actual_price}</p>
                            }
                          </div>

                          <div className='block sm:hidden'>

                            <RatingStar stars={product.stars} mar={0.25} size={12}></RatingStar>


                            <div className='inline text-sm lg:text-base'>
                              <span style={{ color: "#807D7E" }} className='text-[12px]'>({product.reviews})</span>
                            </div>

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
