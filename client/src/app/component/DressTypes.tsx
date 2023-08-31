import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const DressTypes = ({type}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalType = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <button name="type" value={type} className="w-full font-semibold text-left py-1 grid grid-cols-4 text-xs sm:text-sm sm:py-2 md:text-base lg:text-xl" style={{color:"#8A8989"}} onClick={updateFilterValue}>
    <span className='col-span-3'>{capitalType}</span>
    <MdOutlineArrowForwardIos className='inline text-right'></MdOutlineArrowForwardIos>
    </button>
  )
}

export default DressTypes
