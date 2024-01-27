// Login.js

import React, { useState } from 'react';
import loginImg from '../../lib/constants/Screenshot 2024-01-27 135720.png';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const[password,setPassword]=useState('');
  const[username,setUsername]=useState('');
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();

    // Check if the entered username and password match the desired values
    if (username === 'admin' && password === '12345678') {
      
     navigate('/layout');

     toast.success("Login Succesfull !", {
      position: "top-right",
    });
    } else {
      toast.error("Invalid username or password", {
        position:"top-right",
      });
      console.error('Invalid username or password');
    }
  }
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full relative'>
      <div className='bg-primary hidden sm:flex items-center justify-center relative overflow-hidden'>
        {/* <div className='slanted-background'></div> */}
        <ToastContainer/>
        <img className='w-70 h-70 m-6 object-cover absolute top-0 left-0' src={loginImg} alt="" />
        <div className='text-white text-7xl font-bold absolute' style={{ top: '20rem' }}>
          BASE
        </div>
        {/* Social Icons Container */}
        <div className="social-icons-container">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        </div>
      </div>

      <div className='bg-gray-100 flex flex-col rounded-md justify-center relative'>
        <div className='icon-text-container rounded-md p-2'>
          <form className='max-w-[500px] w-full mx-auto rounded-xl p-4 relative z-10'>
            <div className=''>
            <h2 className='text-4xl font-bold pb-3 text-left'>Sign In</h2>
            <h3 className='text-sm text-left'>Sign In to Your Account</h3>
            </div>
            
            <div className='flex w-full  justify-between py-4'>
              <p className='border bg-white rounded-2xl pr-2 pl-2 pb-2 pt-2 shadow-md hover:shadow-xl w-100 relative flex items-center rounded-md'><AiFillFacebook className='mr-2 text-2xl' />Sign In with Facebook</p>
              <p className='border bg-white rounded-2xl pr-2 pl-2 pt-2 pb-2 shadow-md hover:shadow-xl w-100 relative flex items-center rounded-md'><FcGoogle className='mr-2 text-2xl' /> Sign In with Google</p>
            </div>
            <div className='bg-white rounded-2xl pt-6 pb-4 pr-6 pl-6 '>
            <div className='flex flex-col py-2'>
              <label>Email Address</label>
              <input className='border p-2 rounded-md' onChange={(e)=>setUsername(e.target.value)} type="text" />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border p-2 rounded-md' onChange={(e)=>setPassword(e.target.value)} type="password" />
            </div>
            <p className='flex items-center'>
                <p className='text-indigo-600 text-sm pt-2'>Forgot Password ?</p>
              </p>
            <button className='border w-full my-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md' onClick={(e)=>handleSubmit(e)}>Sign In</button>
            </div>
            <div className='p-4 flex justify-center'>
              <p>Dont have an <span className=" text-indigo-600">Account</span></p>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}
