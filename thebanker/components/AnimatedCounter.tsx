'use client';

import React from 'react'
import CountUp from 'react-countup'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full total-balance-amount flex-center gap-2">
      <CountUp 
      duration={2.75}
      decimals = {2}
      decimal = "."
      prefix= "$"
      end = {amount}/>
    </div>
  )
}

export default AnimatedCounter