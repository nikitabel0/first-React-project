import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/modal";

export default function EffectSection(){
    const[modal,setModal]=useState(false)
    const[loading,serLoading] = useState(false)

    async function FeacthUsers() {
        const respons = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await respons.json()        
    }

    useEffect(()=>{

    },[])

    function openModal(){
        setModal(true)
    }

    return(
        <section>
            <h1>Effects</h1>
            <Button onClick={openModal}>открыть инфу</Button>

            <Modal open={modal}>
                <h3>hello pidor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero numquam ea culpa quam dolores.</p>
                <Button onClick={()=>setModal(false)}>закрыть</Button>
            </Modal>
        </section>
    
    )
}