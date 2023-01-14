import React from 'react'
import {FcGoogle} from "react-icons/fc"
export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-600 text-white px-7 py-3
    uppercase text-sm font-semibold rounded shadow-lg hover:bg-red-700 active:bg-red-900 transition duration-200 ease-in-out'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google
        </button>
  )
}
