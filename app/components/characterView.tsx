'use client'
import { useState } from "react"
import Character from "./character"

interface CharacterViewProps{
    characters?: any[]
    profileName?: string
}

const CharacterView = (props: CharacterViewProps) =>{

    const [character, setCharacter] = useState<any>(null)

    return (
        <div className="w-full bg-gray-800 my-8 flex justify-center items-center flex-col min-w-[720px]">
            <p className="relative right-1/3 top-2 text-gray-400">Personagens do perfil</p>
            <div className="h-auto flex gap-10 mb-2 mt-2">
                {props.characters?.map((char)=>(
                    <div key={char.id}>
                        <div 
                            className={`bg-[${char.color}] rounded-full border-[3px] border-gray-900 w-[95px] h-[95px] hover:opacity-70 hover:cursor-pointer hover:scale-110 overflow-hidden`} 
                            onClick={()=>setCharacter(char)}>
                            <img className="w-15 h-15" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/image/character_preview/${char.id}.png` } alt="Personagem" />  
                        </div>
                        <p className="text-center">{char.name === "{NICKNAME}"?props.profileName:char.name}</p>
                    </div>
                    
                    
                ))}
            </div>
            
            {character !== null && <Character character={character} profileName={props.profileName}/>}
            
        </div>
    )
}

export default CharacterView