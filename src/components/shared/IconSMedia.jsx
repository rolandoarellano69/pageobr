import React from 'react'
import Link from 'next/link'
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
export const IconSMedia = () => {
  return (
    <div className='  absolute justify-center top-[2.5rem] gap-4 right-[3rem] items-center mr-[7rem] flex flex-row'>
      <Link href="https://www.facebook.com/obrgroupmex/">
        <RiFacebookBoxFill className='text-lg ' />
      </Link>
      <Link href="https://www.instagram.com/obr._group/" >
        <RiInstagramFill className='text-lg' />
      </Link>
      <Link href="https://mx.linkedin.com/company/obr-group-bienes-ra%C3%ADces">
        <RiLinkedinBoxFill className='text-lg' />
      </Link>
    </div>
  )
}
