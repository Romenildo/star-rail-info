'use client'

import axios from "axios"
import { useState } from "react";

import EmptyContent from "./components/template/EmptyContent";
import Content from "./components/template/content";
import Footer from "./components/template/footer";
import Header from "./components/template/header";

export default function Home() {

  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getProfile = (id: string) =>{
      setProfile(null)
      setIsLoading(true)

      const data = {id: id}
      axios.post('/api/data', data)
        .then((res:any)=>{
            setProfile(res.data)
            setIsLoading(false)
            console.log(res.data)
        })
        .catch(err =>{
          setProfile(null)
          setIsLoading(false)
        })
  }

  return (
    <div className="min-w-[600px]">
      <Header onClick={getProfile} resetCurrentProfile={()=>setProfile(null)}/>
      <main>
        {profile === null ?(
          <EmptyContent isLoading={isLoading}/>
        ):(
          <Content profile={profile}/>
        )}
      </main>
      <Footer/>
    </div>
  )
}
