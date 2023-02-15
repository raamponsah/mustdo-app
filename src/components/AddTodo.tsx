import firebaseApp from "@/lib/firebaseApp";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function AddTodo(props:{user:any}){
    const db = getFirestore(firebaseApp)

    const router = useRouter()


    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        console.log(title, description)

        try{
            await addDoc(collection(db, `${props.user?.email}` ),{title, description})
            router.push('/')
        }catch(e){
            console.log(e)
        }

    }

    return <>
            <form onSubmit={handleSubmit} className="mt-5 min-w-full flex flex-col items-center space-y-4 justify-center">
                <label htmlFor="Title">
                    <h4 className="text-2xl font-mono">Title</h4>
                    <input type="text" className="w-80 p-4 rounded-3xl" name="title"  />
                </label>

                <label htmlFor="description">
                    <h4 className="text-2xl font-mono">Description</h4>
                    <textarea name="description" id="description" className="rounded-xl  w-80 p-4" cols={30} rows={10}></textarea>
                </label>

                <button className="bg-indigo-500 p-4 text-white rounded-full shadow-sm w-80">Add MUSTODO</button>
            </form> 
    </>
}