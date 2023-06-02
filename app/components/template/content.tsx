'use client'

import axios from "axios"

interface ContentProps{

}

const Content = (props: ContentProps) =>{


    const getData= () =>{
        axios.get("https://rails-express.vercel.app/sr_info_parsed/801883292?lang=en")
        .then((res:any)=>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <main className="bg-gray-600 h-screen">
            <div>Content</div>
            <button onClick={getData}>Buscar dados</button>
        </main>
    )
}

export default Content