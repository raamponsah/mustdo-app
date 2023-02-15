import AccountButton from "@/components/AccountButton"
import MyDropdown from "@/components/DropDown"
import Header from "@/components/Header"
import ItemListComponent from "@/components/ItemList"
import firebaseApp from "@/lib/firebaseApp"
import { getAuth } from "firebase/auth"
import { getDocs, getFirestore, collection,addDoc, doc, setDoc  } from "firebase/firestore"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"


import { useCollection } from 'react-firebase-hooks/firestore';

export default function Home() {
   const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  let [user, loading, error] = useAuthState(auth)

  const router  = useRouter()

  useEffect(()=>{
    if(!(user || loading)){
      void router.push('/login')
    }


  },[user, loading])

  return (
    <>
  <Header user={user}/>     
      <section className='flex justify-center mt-8'>
        <button onClick={()=>{router.push('/addpage')}} className='hover:bg-orange-400 hover:text-white active:translate-y-0.5 transition-all outline:none w-80 rounded-full bg-lime-100 shadow-sm font-semibold text-indigo-500  p-5 mx-auto'>ADD TODO</button>
      </section>


    <ItemListComponent user={user} db={db}/>
   
    </>
  )
}



