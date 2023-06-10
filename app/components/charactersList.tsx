'use client'

import { useState } from "react"

import Character from "../Types/Character"
import CharacterInfo from "./characterInfo"

interface CharactersListProps{
    characters?: Character[]
}

const CharactersList = (props: CharactersListProps) =>{

    const [character, setCharacter] = useState<Character | null>(null)

    return (
        <div className="w-full bg-gray-800 my-8 flex justify-center items-center flex-col ">
            <p className="relative right-1/3 top-2 text-gray-400">Personagens do perfil</p>
            <div className="flex gap-8 mb-2 mt-2">
                {props.characters?.map((char)=>(
                    <div key={char.id}>
                        <div 
                            className={`bg-[${char?.element?.color}] rounded-full border-[3px] border-gray-600 w-[95px] h-[95px] hover:opacity-70 hover:cursor-pointer hover:scale-110 overflow-hidden`} 
                            onClick={()=>setCharacter(char)}>
                            <img className="w-15 h-15" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${char.icon}` } alt="Personagem" />  
                        </div>
                        <p className="text-center">{char.name}</p>
                    </div>
                ))}
            </div>

            {character !== null && <CharacterInfo character={character}/>}

        </div>
    )
}

export default CharactersList