
interface DetailProps{
    character?:any
    profileName?: string
}

const Detail = (props: DetailProps) =>{
    return (
        <div className="w-[550px]">
             {/*Informacoes do personagem */}
            <div className="flex ">
                <div className="flex flex-col">
                    <img className="rounded-lg w-32 h-32 bg-gradient-to-b from-amber-600 to-orange-100 min-w-[130px]" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/character/${props.character.id}.png` } alt="Personagem" />
                    <img className="w-32 h-8 mt-1" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/deco/Star${props.character.rarity}.png` } alt="Personagem" />
                </div>
                <div className="min-w-[400px] flex flex-col items-center">
                    <div className="flex w-full justify-between items-center">
                        <p className="text-2xl pl-4 font-bold ">{props.character.name === "{NICKNAME}"?props.profileName:props.character.name}</p>
                        <img className="w-12 h-12" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props.character?.element?.icon}` } alt="Personagem" />
                    </div>
                    <div className="w-full flex justify-start pl-2 mt-1 bg-white bg-opacity-20 rounded-md ml-2 items-center">
                        <img className="w-7 h-7 " src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props?.character?.path?.icon}` } alt="Personagem" />
                        <p className="pl-2"> {props.character?.path?.name}</p>
                    </div>
                    <div className="flex w-full pl-2 mt-3">
                        <p className="text-xl">Nv. <span className="text-xl ">{props.character.level}/<span className="text-gray-400">{Math.round(props.character.level / 10) * 10}</span></span> </p>
                    </div>
                    <div className="w-full border-t border-gray-400 mt-1 ml-2" />

                </div>
            </div>
            {/**Atributos */}
            <div className="flex flex-col items-center">
                <p>Atributos</p>
                <ul className="flex justify-center flex-col w-10/12">
                    {props.character.additions.map((attr:any, index:number)=>(
                        <li key={index} className={`flex w-full justify-between ${index%2==1 ?"bg-white bg-opacity-5":''}`}>
                            <div className="flex">
                                <img className="w-7 h-7 " src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${attr.icon}` } alt="Personagem" />
                                <p>{attr.name}</p>
                            </div>
                            {/**<p className="text-center">{attr.base}<span className="text-yellow-300">{attr.addition===null?'':`+${attr.addition}`}</span></p> */}
                            <p className="text-center py-1">{attr.percent? `${(attr.value * 100).toFixed(1)}%` : Math.floor(attr.value)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Detail