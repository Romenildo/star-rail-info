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
      const data = {id: id}
      setIsLoading(true)

      axios.post('/api/data', data)
      .then((res:any)=>{
          setProfile(res.data)
          console.log(res.data)
          setIsLoading(false)
      })
      .catch(err =>{
        setProfile(null)
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <div>
      <Header onClick={getProfile}/>
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
