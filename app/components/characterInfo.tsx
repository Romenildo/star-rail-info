'use client'
import { useState } from "react"

import Detail from "./charInfo/detail"
import LightConeDetail from "./charInfo/lightConeDetail"
import RelicDetail from "./charInfo/relicDetail"
import Character from "../Types/Character"

interface CharacterInfoProps{
    character?:Character
}

type options = "DETAIL" | "LIGHT_CONE" | "RELIC"

const CharacterInfo = (props: CharacterInfoProps) =>{

    const [detailSelected, setDetailSelected] = useState<options>("DETAIL")

    const selectedDetailRender = ()=>{
        if(detailSelected ==="DETAIL"){
            return <Detail character={props.character}/>
        }
        if(detailSelected ==="LIGHT_CONE"){
            return <LightConeDetail lightCone={props.character?.light_cone}/>
        }
        if(detailSelected ==="RELIC"){
            return <RelicDetail relics={props.character?.relics}/>
        }
    }

    return (
        <div className="w-full bg-gray-600 flex items-center justify-center pt-3">
            <div className=" bg-[url('/images/bg.png')] bg-cover w-11/12 pb-5 flex p-4 min-w-[850px]">

                <div >
                    <div className="flex gap-2 items-center">
                        <img className="w-[50px] h-[50px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/AvatarIcon.png` } alt="Personagem" />
                        <p className="text-yellow-300 text-lg">Detalhes do personagem</p>
                    </div>
                    
                    <ul className="flex flex-col justify-center items-start py-5  gap-6 text-xl mr-5 relative left-10">
                        <li 
                            className="hover:text-yellow-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-10 py-2 rounded-3xl flex gap-2 pl-2 w-[200px]"
                            onClick={()=>{setDetailSelected("DETAIL")}}
                        >
                            <img className="w-8 h-8" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/NoviceAvatarIcon.png` } alt="Personagem" />
                            Detalhes
                        </li>
                        <li 
                            className="hover:text-yellow-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-10 py-2 rounded-3xl flex gap-2 pl-2 w-[200px]"
                            onClick={()=>{setDetailSelected("LIGHT_CONE")}}
                        >
                            <img className="w-8 h-8" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/NoviceBookIcon.png` } alt="Personagem" />
                            Cone de luz
                        </li>
                        <li 
                            className="hover:text-yellow-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-10 py-2 rounded-3xl flex gap-2 pl-2 w-[200px]"
                            onClick={()=>{setDetailSelected("RELIC")}}
                        >
                            <img className="w-8 h-8" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/NoviceAchievementIcon.png` } alt="Personagem" />
                            Relíquias
                        </li>
                    </ul>
                </div>

                <div className="pl-10">
                    {selectedDetailRender()}
                </div>

            </div>
        </div>
    )
}

export default CharacterInfo