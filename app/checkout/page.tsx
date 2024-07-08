import React from 'react'
import BillingForm from './_components/billing-form'
import { Metadata } from 'next'
import ShoppingCart from './_components/shopping-cart'

export const metadata: Metadata = {
  title: 'Checkout'
}

export default function CheckoutPage() {
  return (
    <main className='bg-light_cyan min-h-screen flex flex-col justify-center'>
      <section className='flex flex-wrap justify-center gap-3 pt-12'>
        <BillingForm/>
        <ShoppingCart/>
      </section>
    </main>
    )
}
