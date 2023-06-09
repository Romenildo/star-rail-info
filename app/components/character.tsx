import Detail from "./charInfo/detail"
import LightConeDetail from "./charInfo/lightConeDetail"

interface CharacterProps{
    character?:any
    profileName?: string
}

const Character = (props: CharacterProps) =>{
    return (
        <div className="w-full bg-gray-600 flex items-center justify-center pt-3">
            <div className=" bg-[url('/images/bg.png')] bg-cover w-11/12 pb-5 flex p-4 min-w-fit">

                <div className="w-1/5 min-w-[300px]">
                    <div className="flex gap-2 items-center">
                        <img className="w-[50px] h-[50px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/AvatarIcon.png` } alt="Personagem" />
                        <p className="text-yellow-300 text-lg">Detalhe do personagem</p>
                    </div>
                    
                    <ul className="w-full flex flex-col justify-center items-start py-10  gap-8 text-xl relative left-14">
                        <li className="hover:text-yellow-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-10 py-2 rounded-3xl flex gap-2 pl-2">
                            <img className="w-[35px] h-[25px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/NoviceAvatarIcon.png` } alt="Personagem" />
                            Detalhes
                            </li>
                        <li className="hover:text-yellow-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-10 py-2 rounded-3xl flex gap-2 pl-2">
                            <img className="w-[35px] h-[25px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/NoviceBookIcon.png` } alt="Personagem" />
                            Cone de luz
                            </li>
                        <li className="hover:text-yellow-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-5 px-10 py-2 rounded-3xl flex gap-2 pl-2">
                            <img className="w-[35px] h-[25px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/NoviceAchievementIcon.png` } alt="Personagem" />
                            Relíquias
                        </li>
                    </ul>
                </div>

                <div className="pl-20">
                    {/** <Detail character={props.character} profileName={props.profileName}/>*/}
                    <LightConeDetail lightCone={props.character?.light_cone}/>
                </div>

            </div>
        </div>
    )
}

export default Character