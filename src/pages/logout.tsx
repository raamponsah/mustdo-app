import firebaseApp from "@/lib/firebaseApp"
import { getAuth } from "firebase/auth"
import { useSignOut } from "react-firebase-hooks/auth"

export default function LogOutPage(){
    const auth = getAuth(firebaseApp)
    const [signOut, loading, error] = useSignOut(auth)
    return <>
    <button onClick={()=>signOut()}>Logout</button>
    </>
}