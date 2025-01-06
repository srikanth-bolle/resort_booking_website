import React from 'react'
import { auth } from '../auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
const AdminPage = async() => {

  const session = await auth()

  if(!session){
    redirect("/login")
  }
  return (
    <div>
      {session?(
        <>
        <h1>This is Admin Page</h1>
        </>
      ):'Not Authorized'}
      <Link href='/login'>Login</Link>
    </div>
  )
}

export default AdminPage