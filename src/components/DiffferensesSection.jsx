import Button from "./Button/Button"
import { differences } from "../data"
import { useState } from "react"

export default function DifferencesSection(){
    const[content,setContent] = useState(null)

    function HandlClick(type){
      setContent(type)
      
    }
    return( <section>
        <h3>Наши отличия</h3>
        <Button isActive={content === 'way'} onClick={()=>HandlClick('way')}>подход</Button>
        <Button  isActive={content === 'easy'} onClick={()=>HandlClick('easy')}>доступность</Button>
        <Button  isActive={content === 'program'}onClick={()=>HandlClick('program')}>концентрация</Button>
        {!content ? <p>нажми</p>:null}
        {content ? <p>{differences[content]}</p>:null}
      </section>)
}