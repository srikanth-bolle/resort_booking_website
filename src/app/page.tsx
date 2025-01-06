import React from 'react';
// import { auth } from '@/app/api/auth/[...nextauth]/auth'; // Correct path for `auth`
import { auth } from './auth';
import { redirect } from 'next/navigation';
import DBConnection from './utils/config/db'; 
import UserNavigation from './components/userNavigation';
import AdminPage from './Admin/page';

const HomePage = async () => {
  
  await DBConnection();

 
  const session = await auth();

  
  if (!session) {
    redirect('/login');
  }

 
// const username =session.user?.name
// console.log('check user',username)
  return (
    <div>
      <UserNavigation />
      <h1>Welcome, {session.user?.name}</h1>
    </div>
    // <div>
    //   {session.role === 'user' &&  (
    //     <>
    //     <UserNavigation userName = {userName}/>
    //     <img src='banner.jpg' alt='banner' className='bannerImage'/>
       
    //     </>
    //   ) }
    //   {session.role === 'admin' &&
    //     <AdminPage /> 
    // }
    // </div>
  );
};

export default HomePage;
