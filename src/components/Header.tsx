import LogOutPage from "@/pages/logout";
import Image from "next/image";

export default function Header(props:{user:any}){
    return <>
        <header className='bg-indigo-600 shadow-xl text-white flex justify-between p-4 uppercase font-black'>
        <nav>

<Image src={`https://lh3.googleusercontent.com/a/${props.user?.photoURL?.split('/')[4]}`} width={48} height={48} alt="photo" className="rounded-full"/>
</nav>
<h1 className='text-3xl'>MustDo!</h1>


<LogOutPage></LogOutPage>

</header>
    </>
}