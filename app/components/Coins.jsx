import React from 'react'
import Image from 'next/image'

export default function Coins({coins}) {
  return (
    <>
    <ul className='grid grid-cols-4 mx-auto max-w-[1260px] gap-10'>
        {coins.map(coins => (
            <li key={coins.uuid} className='flex flex-col'>
            <Image src={coins.iconUrl} alt={coins.name} width={70} height={70} priority/>
                <h3>{coins.name}</h3>
                <p>{coins.symbol}</p>
                <p>{coins.price}</p>
            </li>
        )
        )}
    </ul>
    </>
  )
}
