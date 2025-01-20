import Link from 'next/link'
import React from 'react'

const UserNavigation = ({username}:any) => {
  return (
    <div className='flex justify-between items-center px-6 py-3 bg-black text-white'>
    <div className="">
      <Link href="/" className="text-[20px]">
        <h2>Holiday Resort</h2>
      </Link>
    </div>
   
    <div className="">
        Call now : 123 456 789
    </div>
    <Link href="/invoice" className=''>
    <div className="hover:underline active:underline active:decoration-red-400">
      Bookings: 
    </div>
    </Link>
    <p>Welcome: 
      <span style={{color:'yellow', marginLeft:'5px', fontSize:'1.2rem', border:'none'}}>
      
      </span>
       </p>
    <Link href="/api/auth/signout" className=''>
    <div className="hover:underline active:underline active:decoration-red-400">
        Logout
    </div>
    </Link>
</div>
  )
}

export default UserNavigation;