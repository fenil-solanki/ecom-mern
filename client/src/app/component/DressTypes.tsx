import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const DressTypes = ({type}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalType = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className='w-full  grid grid-cols-4 py-1 sm:py-2 '>
    <button name="type" value={type} className="col-span-3 font-semibold text-left text-xs sm:text-sm md:text-base lg:text-xl" style={{color:"#8A8989"}} onClick={updateFilterValue}>
    {capitalType}
    </button>
    <MdOutlineArrowForwardIos className='inline text-right font-semibold text-xs sm:text-sm md:text-base  lg:text-xl' style={{color:"#8A8989"}} ></MdOutlineArrowForwardIos>

    </div>
  )
}

export default DressTypes
