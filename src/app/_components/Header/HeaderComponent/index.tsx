import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Gutter } from '../../Gutter'

import { Header } from '@/payload/payload-types'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav>
      <Gutter className=' flex items-center justify-between flex-wrap'>
        <Link href="/">
          <div className='mt-8'>
          <img src='/logo-black.svg' alt='logo'/>
          </div>
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
