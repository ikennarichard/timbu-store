import { ReactNode } from 'react'

export default function FooterListItem({ children }: { children: ReactNode }) {
  return (
    <li className='flex flex-col gap-5 text-white'>
      {children}
    </li>
  )
}
