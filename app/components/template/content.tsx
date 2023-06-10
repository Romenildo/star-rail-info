'use client'

import Profile from "@/app/Types/Profile"
import ProfileView from "../profileView"
import CharactersList from "../charactersList"


interface ContentProps{
    profile?: Profile
}

const Content = (props: ContentProps) =>{

    return (
        <main className="bg-gray-600 h-fit flex flex-col items-center text-white bg-[url('/images/bg-start.png')]">
            <ProfileView profile={props.profile}/>
            <CharactersList characters={props.profile?.characters} />
           
        </main>
    )
}

export default Content