

import React from 'react'
import { auth } from '../auth';
import { redirect } from 'next/navigation'
import Link from 'next/link'
import AdminNavbar from '../components/AdminNavbar'
import AddProduct from '../components/AddProduct'



const AdminPage = async() => {

  const session = await auth()
console.log('sessions',session)
  if(!session){
    redirect("/login")
  }



  return (
      <div>
        {session ? (
          <>
          <AdminNavbar />
          <AddProduct />

          </>
        ) : <div className=''>
          <h1>Not Authorized</h1>
          <Link href="/login"> Login</Link>
        </div>
      }
      </div>
   
  )
}

export default AdminPage