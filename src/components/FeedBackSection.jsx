import { useState, useRef } from "react";
import Button from "./Button/Button";


function StateVsRef(){
    const input = useRef()
    //const[text,SetText] = useState('')
    const [show, setShow] = useState(false)

    //function HandlSetText(){
       //SetText(event.target.value)
   // }

    function HandlKeyDown(event){
        if(event.key == 'Enter'){
            setShow(true)
        }
    }
    return(
        <div>
            <h3>input value {show && input.current.value}</h3>
            <input
            ref={input}
            onKeyDown={HandlKeyDown}
             //value={text}
            // onChange={HandlSetText} 
             type="text" className="control" />
        </div>
    )
}

export default function FeedbackSection(){
    const[form,setForm] = useState({
        name:'',
        hasError: true,
        reason: 'help'
    })  
 

    function handlenameChange(event){
       // setName(event.target.value)
        //setHasError(event.target.value.trim().length == 0)
        setForm((prev)=>({
            ...prev,
            name :event.target.value,
            hasError: event.target.value.trim().lenght == 0
    }))
    }
    //function handlReasonChange(){
       // setReason(event.target.value)
       
    //}

    return(
        <section>
            <h3>Обратная связь</h3>
            <form action="">
                <label htmlFor="name" id="name">your name</label>
                <input style={{
                    border: form.hasError ? "1px solid red" : null,
                }} className="control" type="text" value={form.name} onChange={handlenameChange} />

                <label htmlFor="reason">причина обращения</label>
                <select
                    onChange={(event) =>
                        setForm((prev) => ({ ...prev, reason: event.target.value }))
                      }
                 id="reason" className="control" value={form.reason} >
                    <option value="Error">ошибка</option>
                    <option value="help">помощь</option>
                    <option value="suggest">предлодения</option>
                </select>

                
                <Button didabled={form.hasError} isActive={!form.hasError} >отправить</Button>
            </form>
            <StateVsRef></StateVsRef>
        </section>
    )
}