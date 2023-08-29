import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const Companies = ({company}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalcompany = company.charAt(0).toUpperCase() + company.slice(1);
  return (
    <button name="company" value={company} className="w-full font-semibold text-left py-2 grid grid-cols-2" style={{color:"#8A8989"}} onClick={updateFilterValue}>
    {capitalcompany}
    <MdOutlineArrowForwardIos className='inline text-right'></MdOutlineArrowForwardIos>
    </button>
  )
}

export default Companies