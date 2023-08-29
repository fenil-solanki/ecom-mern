import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const DressTypes = ({type}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalType = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <button name="type" value={type} className="w-full font-semibold text-left py-2 grid grid-cols-2" style={{color:"#8A8989"}} onClick={updateFilterValue}>
    {capitalType}
    <MdOutlineArrowForwardIos className='inline text-right'></MdOutlineArrowForwardIos>
    </button>
  )
}

export default DressTypes