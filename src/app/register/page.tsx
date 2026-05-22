"use client"

import { useState } from "react"

export default function RegisterPage() {

 const [loading,setLoading] =
 useState(false)

 async function handleSubmit(
  e:any
 ){

  e.preventDefault()

  setLoading(true)

  const formData =
  new FormData(e.target)

  const response =
  await fetch("/api/auth/register",{

   method:"POST",

   headers:{
    "Content-Type":"application/json"
   },

   body:JSON.stringify({

    name:formData.get("name"),
    email:formData.get("email"),
    password:formData.get("password")

   })

  })

  setLoading(false)

  if(response.ok){

   alert("Account Created")

   location.href="/login"

  }

 }

 return(

  <form
   onSubmit={handleSubmit}
   className="max-w-md mx-auto p-6"
  >

   <input
    name="name"
    placeholder="Name"
    className="border p-2 w-full mb-3"
   />

   <input
    name="email"
    placeholder="Email"
    className="border p-2 w-full mb-3"
   />

   <input
    type="password"
    name="password"
    placeholder="Password"
    className="border p-2 w-full mb-3"
   />

   <button
    className="bg-blue-600 text-white px-4 py-2 rounded"
   >
    {loading ? "Creating..." : "Register"}
   </button>

  </form>

 )

}