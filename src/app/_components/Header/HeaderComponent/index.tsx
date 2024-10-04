"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Gutter } from '../../Gutter'

import { Header } from '@/payload/payload-types'


import classes from './index.module.scss'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'
import { noHeaderFooterUrls } from '@/app/constants'
import { usePathname } from 'next/navigation'


const HeaderComponent = ({ header }: { header: Header }) => {

  const pathname = usePathname()
  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>

      <Gutter className={[classes.wrap]}>
        <Link href="/">
          <div className='mt-8'>
          <img src='/logo-black.svg' alt='logo'/>
          </div>
        </Link>

        <HeaderNav header={header}/>
        <MobileNav header={header}/>


      </Gutter>
    </nav>
  )
}

export default HeaderComponent
