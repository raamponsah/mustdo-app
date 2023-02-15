import firebaseApp from "@/lib/firebaseApp";
import {getAuth} from 'firebase/auth'
import Image from "next/image";
import GoogleIcon from '@/images/google.svg'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function LoginPage(){
    const auth = getAuth(firebaseApp)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const router = useRouter()

    useEffect(()=>{
        if(user){
            void router.push('/')
        }
    }, [user])

    return (<div className="bg-indigo-700 min-h-screen flex items-center flex-col justify-center">
    
        <h1 className="text-5xl font-mono tracking-wider mb-4 text-white uppercase">MustDo!</h1>
        <button onClick={()=>{signInWithGoogle()}} className="bg-slate-200 p-3 w-60 rounded-full flex justify-center text-4xl">
            
           <Image alt="Google icon" src={GoogleIcon} width={48} height={48}/>
        
            Sign in
        </button>

    </div>)
    
}