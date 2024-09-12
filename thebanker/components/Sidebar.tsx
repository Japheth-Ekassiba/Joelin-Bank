'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({user}: SiderbarProps) => {

  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className= "flex flex-col gap-4">
        <Link href = "/" className= "mb-12 cursor-pointer items-center flex gap-2">
          <Image
            src= "/icons/logo.svg"
            width={35}
            height={35}
            alt= "The Banker logo"
            className="size-[24px]
            max-xl:size-14"
          />

          <h1 className= "sidebar-logo">Banker</h1>
        </Link>

        {sidebarLinks.map((item) =>
        {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const isActive = pathname === item.route ||
          pathname.startsWith(`${item.route}/`)
          return(
            <Link 
            href={item.route} 
            key={item.label}
            className= {cn('sidebar-link', {'bg-bank-gradient':isActive})}>
              <div className="relative size-6">
                <Image
                 src= {item.imgURL}
                 alt= {item.label}
                 fill
                 className= {cn({
                  'brightness-[3] invert-0':isActive
                 })}
                />
              </div>

              <p className= {cn(
                'sidebar-label', {
                '!text-white' : isActive
              }
              )}>{item.label}</p>
            </Link>
          )
        })}

        USER
      </nav>

      <Footer user = {user}/>
    </section>
  )
}

export default Sidebar