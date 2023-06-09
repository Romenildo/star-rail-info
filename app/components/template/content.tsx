'use client'

import CharacterView from "../characterView"
import ProfileView from "../profileView"


interface ContentProps{
    profile?: any
}


//para testes 801883292 | 601524235
const Content = (props: ContentProps) =>{

    return (
        <main className="bg-gray-600 h-fit w-full flex flex-col items-center text-white bg-[url('/images/bg-start.png')]">
            <ProfileView profile={props.profile}/>
            <CharacterView characters={props.profile?.characters} profileName={props.profile?.player?.nickname}/>
           
        </main>
    )
}

export default Content