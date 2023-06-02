'use client'

import axios from "axios"

interface ContentProps{

}

const Content = (props: ContentProps) =>{


    const getData= (uid: number ) =>{

        const baseUrl = "https://api.mihomo.me/sr_info_parsed";
        const url = `${baseUrl}/${uid}`;

        axios.get(url)
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
            <button onClick={()=>getData(801883292)}>Buscar dados</button>
        </main>
    )
}

export default Content