interface CharacterProps{
    character?:any
    profileName?: string
}

const Character = (props: CharacterProps) =>{
    return (
        <div className="w-full bg-gray-600 flex items-center justify-center pt-3">
            <div className=" bg-[url('/images/bg.png')] bg-cover w-11/12 h-[500px] flex p-4">

                <div className="w-1/5 min-w-[300px]">
                    <div className="flex gap-2">
                        <img className="w-[50px] h-[50px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/sign/AvatarIcon.png` } alt="Personagem" />
                        <div className="text-lg">
                        
                            <p className="text-yellow-300">Detalhe do personagem</p>
                            <div className="flex pt-1">
                                <img className="w-[35px] h-[25px] pl-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props.character.element_icon}` } alt="Personagem" />
                                <p className="pl-1">{props.character.element} / {props.character.name === "{NICKNAME}"?props.profileName:props.character.name}</p>
                            </div>
                        </div>
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

                <div className="pl-10">Detalhes</div>
a
            </div>
        </div>
    )
}

export default Character