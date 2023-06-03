'use client'

import CharacterView from "../characterView"
import ProfileView from "../profileView"


interface ContentProps{
    profile?: any
}


//para testes 801883292
const Content = (props: ContentProps) =>{

    return (
        <main className="bg-gray-600 h-screen w-ful flex flex-col items-center text-white">
            <ProfileView profile={props.profile}/>
            <CharacterView/>
           
        </main>
    )
}

export default Content