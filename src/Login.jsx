import { alertTitleClasses } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

    const login = e => {
      e.preventDefault()

      auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/')
      })
      .catch((e) => alert(e.message))
    }


    const register = e => {
      e.preventDefault()

      auth.createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        navigate('/')

      })
      .catch((e) => alert(e.message))
    }

  return (
    <div className='bg-[white] h-full flex flex-col items-center shadow-sm py-10 '>
      <Link to="/login">
        <img className='w-24 object-contain my-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className='w-[350px] flex flex-col p-5 border border-solid border-gray-400 '>
        <h1 className='font-medium mb-5'>Sign in</h1>
        <form >
          <h5 className='mb-1'>E-mail</h5>
          <input value={email} onChange={e => setEmail(e.target.value)} className='h-8 mb-3 bg-white w-[98%] border rounded-sm border-gray-400 px-2' type="email" />
          <h5 className='mb-1'>Password</h5>
          <input value={password} onChange={e => setPassword(e.target.value)} className='h-8 mb-3 bg-white w-[98%] border rounded-sm border-gray-400 px-2' type="password" />
          <Link>

          <button type='submit' onClick={login} className='bg-[#f0c14b] rounded w-full h-8 border border-solid mt-3 '>Sign In</button>
          </Link>
        </form>

        <p className='mt-4 text-xs'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className='rounded-sm w-full h-8 border border-solid mt-3 border-gray-400'>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login
