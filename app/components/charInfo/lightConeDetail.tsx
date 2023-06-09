
interface LightConeDetailProps{
    lightCone: any
}

const LightConeDetail = (props: LightConeDetailProps) =>{
    console.log(props.lightCone)
    return (
        
        <div className="flex gap-12"> 
            <div className="pt-6">
                <img className="w-[300px] min-w-[200px]" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props.lightCone.portrait}` } alt="lighCone" />
                <div className="flex relative bottom-16 left-3">
                    <img className="w-12 h-12 " src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props?.lightCone?.path?.icon}` } alt="Personagem" />
                    <img className="w-32 h-8 mt-1" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/deco/Star${props.lightCone.rarity}.png` } alt="Personagem" />
                </div>
            </div>

            <div className="min-w-[220px] pt-10 w-[300px]">

                <div>
                    <p className="text-[1.2rem] font-semibold whitespace-nowrap">{props.lightCone.name}</p>

                    <div className="w-full flex justify-start my-1.5 bg-white bg-opacity-20 items-center">
                        <img className="w-7 h-7 ml-2" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props?.lightCone?.path?.icon}` } alt="Personagem" />
                        <p className="pl-2"> {props.lightCone?.path?.name}</p>
                    </div>
                    <p className="my-2" >Nv. <span>{props.lightCone.level}/<span className="text-gray-400">{Math.round(props.lightCone.level / 10) * 10}</span></span> </p>
                    
                    <div className="w-full border-t-4  border-gray-400 my-2" />
                </div>

                <ul className="flex justify-center flex-col mt-5">
                    <p className="text-center text-gray-300">Atributos</p>
                    {props.lightCone?.attributes?.map((attr:any, index:number)=>(
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

export default LightConeDetail