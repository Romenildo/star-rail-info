'use client'
import Character from "./character"

interface CharacterViewProps{
    characters?: any[]
    profileName?: string
}

const CharacterView = (props: CharacterViewProps) =>{
    return (
        <div className="w-full bg-gray-800 my-8 flex justify-center items-center flex-col">
            <div className="h-auto flex gap-10 mb-6 mt-3">
                {props.characters?.map((char)=>(
                    <div 
                        className={`bg-[${char.color}] rounded-full border-[3px] border-gray-900 w-[95px] h-[95px] hover:opacity-70 hover:cursor-pointer hover:scale-110`} 
                        key={char.id}
                    >
                        <img className="w-[80px] h-[85px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/image/character_preview/${char.id}.png` } alt="Personagem" />
                        <p className="text-center mt-1">{char.name === "{NICKNAME}"?props.profileName:char.name}</p>
                    </div>
                ))}
            </div>
            <Character/>
        </div>
    )
}

export default CharacterView