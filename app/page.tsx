'use client'

import axios from "axios"
import { useState } from "react";

import EmptyContent from "./components/template/EmptyContent";
import Content from "./components/template/content";
import Footer from "./components/template/footer";
import Header from "./components/template/header";



export default function Home() {

  const [profile, setProfile] = useState<any>(null)

  const getProfile = (id: string) =>{
    const data = {id: id}

        axios.post('/api/data', data)
        .then((res:any)=>{
            setProfile(res.data)
            console.log(res.data)
        })
        .catch(err =>{
          setProfile(null)
          console.log(err)
        })
  }

  return (
    <div>
      <Header onClick={getProfile}/>
      <main>
        {profile === null ?(
          <EmptyContent/>
        ):(
          <Content profile={profile}/>
        )}
        
      </main>
      <Footer/>
    </div>
  )
}
