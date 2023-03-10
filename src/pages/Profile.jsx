import React from 'react'
import { useState } from 'react'
import { getAuth, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {doc, updateDoc} from "firebase/firestore"
import { db } from '../firebase'
//import {db} from "../firebase"

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const {name, email} = formData
  function onLogout(){
    auth.signOut()
    navigate("/")
  }
  function onChange(e){
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        //update displayname in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        //update name in firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        })
      }
      toast.success("Edit profile successfully!")
    } catch (error) {
      console.log(error);
      toast.error("Couldn't edit profile detail!")
    }
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>

        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            {/**Name input */}
            <input 
            type="text" 
            id='name' 
            value={name} 
            disabled = {!changeDetail} 
            onChange = {onChange}
            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700
            bg-white border-gray-300 rounded transition ease-in-out ${
              changeDetail && "bg-red-200 focus:bg-red-200"
            }`} 
            />
            {/**Email Input */}
            <input type="email" id='email' value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700
            bg-white border-gray-300 rounded transition ease-in-out' />
            <div className='mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='flex items-center '>
                Do you want to change your name?
                <span className='ml-1  text-red-600 hover:text-red-800 
                transition ease-in-out duration-200 cursor-pointer'
                onClick={() => {
                  changeDetail && onSubmit()
                  setChangeDetail((prev) => !prev)
                }}
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer'>
                Sign out
                </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
