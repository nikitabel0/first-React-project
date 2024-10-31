import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/modal";

export default function EffectSection(){
    const[modal,setModal]=useState(false)
    const[loading,setLoading] = useState(false)
    const[data,setData] = useState([])


    
    useEffect(()=>{
        async function FeacthUsers() {
            setLoading(true)
            const respons = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await respons.json() 
            setData(data)
            setLoading(false)
        }
        FeacthUsers()
    },[])

    function openModal(){
        setModal(true)
    }

    return(
        <section>
            <h1>Effects</h1>
            <Button style={{marginBottom: '1rem'}} onClick={openModal}>открыть инфу</Button>

            <Modal open={modal}>
                <h3>hello pidor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero numquam ea culpa quam dolores.</p>
                <Button onClick={()=>setModal(false)}>закрыть</Button>
            </Modal>

            {loading && <p>жди лох....</p>}
            {!loading && <ul>
                {data.map(user => <li key={user.id}>
                    {user.name}
                </li>)}</ul>}
        </section>
    
    )
}