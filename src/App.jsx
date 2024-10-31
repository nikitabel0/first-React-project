import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DiffferensesSection"
import IntroSection from "./components/introSection"
import TabsSection from "./components/TabsSection"
import { useState } from "react"
import FeedbackSection from "./components/FeedBackSection"


export default function App() {
  const[tab, setTab] = useState('feedback')
  return (
    <>
      <Header></Header>
     <main>

     <IntroSection></IntroSection>
     <TabsSection Active={tab} onChange={(curr)=>setTab(curr)} />

      
      {tab =='main' && (<><TeachingSection></TeachingSection>
        <DifferencesSection></DifferencesSection></> )}

      {tab == 'feedback'&& <FeedbackSection></FeedbackSection>}
     
      </main> 
    </>
  )
}

