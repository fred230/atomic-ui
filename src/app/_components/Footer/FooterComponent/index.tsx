"use client"

import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '@/app/constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

const FooterComponent = () => {

  const pathname = usePathname()


  return (
    <footer className={noHeaderFooterUrls.includes(pathname)? classes.hide: ''}>
      <Gutter>
        <ul className='w-full grid grid-cols-2 lg:flex lg:flex-row mb-8 gap-3'>
         {
          inclusions.map(
            (inclusion, index)=>(
              <li key={inclusion.title} className='p-3'>

                <Image
                src={inclusion.icon}
                width={36}
                height={36}
                alt={inclusion.title}
                className={classes.icon}


                
                />

                <h5 className='p-1'>{inclusion.title}</h5>
                <p>{inclusion.description}</p>


              </li>
            )


            
          )
         }

</ul>

      </Gutter>

    </footer>
  )
}

export default FooterComponent