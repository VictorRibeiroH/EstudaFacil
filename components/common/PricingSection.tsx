import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { tiers } from '@/constants'
import PricingCard from './PricingCard'

const PricingSection = () => {
  return (
    <MaxWidthWrapper>
        <div className='py-20'>
            <h2 className='text-3xl font-bold text-center mb-12'>
                Escolha seu plano
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                {tiers.map((tier, index) => (
                    <PricingCard tier={tier} index={index} key={index}/>
                ))}
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default PricingSection