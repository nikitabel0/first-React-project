import Button from "./Button/Button";

export default function TabsSection({Active, onChange}){
    return(
        <section style={{marginBottom:'1rem'}}>
            <Button isActive={Active=='main'}  onClick={()=>onChange('main')}>Главная</Button>
            <Button isActive={Active=='feedback'} onClick={()=>onChange('feedback')}>Обратная связь</Button>
            <Button isActive={Active=='effect'} onClick={()=>onChange('effect')}>effect</Button>
        </section>
    )
}