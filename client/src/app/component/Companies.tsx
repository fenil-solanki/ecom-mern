import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const Companies = ({company}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalcompany = company.charAt(0).toUpperCase() + company.slice(1);
  return (
    <button name="company" value={company} className="w-full font-semibold text-left py-1 grid grid-cols-4 text-xs sm:text-sm sm:py-2 md:text-base lg:text-xl" style={{color:"#8A8989"}} onClick={updateFilterValue}>
    <span className='col-span-3'>{capitalcompany}</span>
    <MdOutlineArrowForwardIos className='inline text-right'></MdOutlineArrowForwardIos>
    </button>
  )
}

export default Companies
