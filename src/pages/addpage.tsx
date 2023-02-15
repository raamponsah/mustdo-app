import AddTodo from "@/components/AddTodo";
import Header from "@/components/Header";
import firebaseApp from "@/lib/firebaseApp";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AddPage(){
    const auth = getAuth(firebaseApp)
    const [user, loading, error] = useAuthState(auth)
    const router  = useRouter()
  
  
    useEffect(()=>{
      if(!(user || loading)){
        void router.push('/login')
      }
  
    },[user, loading])

    return <>
    <Header user={user}/>
        <AddTodo user={user}/>
    </>
}