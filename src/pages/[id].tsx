import firebaseApp from "@/lib/firebaseApp"
import { getAuth } from "firebase/auth"
import { collection, doc, getFirestore } from "firebase/firestore"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useDocument } from "react-firebase-hooks/firestore"

export default function DetailPage(){
    const router = useRouter()
    const db = getFirestore(firebaseApp)
    
    const auth = getAuth(firebaseApp)
    const [user, loading, error] = useAuthState(auth)
    const collRef = collection(db, `${user?.email}`)
    const docRef = doc(db,`${collRef}` ,`${router.query.id}`)
    const [value] = useDocument(
        doc(getFirestore(firebaseApp), `${collRef}`, `${router.query.id}`),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        });



    return <>
    <h1>{router.query.id}</h1>
        <h1>{JSON.stringify(value?.data())} </h1>
    </>
}