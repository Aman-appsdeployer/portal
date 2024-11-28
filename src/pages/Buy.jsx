import React from 'react'
import {  StockCard2 } from '../components/StockCard'
import GraphCard from '../components/GraphCard'

export default function Buy() {
  return (
    <div className='flex flex-1 flex-col w-full h-full'>

        <StockCard2/>
        <GraphCard/>
    </div>
  )
}
