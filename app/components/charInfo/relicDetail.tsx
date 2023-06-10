interface RelicDetailProps{
    relics: any
}

const RelicDetail = (props: RelicDetailProps) =>{
    const selectBgColor=(rarity:number)=>{
        if(rarity === 5) return "bg-gradient-to-br from-amber-800 to-yellow-300"
        if(rarity === 4) return "bg-gradient-to-br from-purple-900 to-purple-300"
        if(rarity === 3) return "bg-gradient-to-br from-blue-900 to-blue-300 "
    }

    return (
        <div>
            {props.relics.length > 0 ? (
                <div className="flex min-w-[800px]"> 
                    <ul className="flex flex-col h-full flex-wrap text-xs sm:h-[660px]">
                        {props.relics?.map((relic:any, index:number)=>(
                            <li key={index} className="my-0.5 mx-3 px-2 bg-gray-500 bg-opacity-20 rounded-md">
                                <div className="my-1">
                                    <span className="text-yellow-500">{relic.name}</span><span className="ml-2 text-[1.3em]">+{relic.level}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-full ${selectBgColor(relic.rarity)}`}>
                                        <img className="w-16 h-16" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${relic?.icon}` } alt="Personagem" />
                                    </div>
                                    <div className="w-[250px]">
                                        {/*Main status */}
                                         <div className={`flex w-full justify-between text-orange-400 font-bold bg-gray-300 bg-opacity-20 px-2`}>
                                            <div className={`flex items-center `}>
                                                <img className="w-7 h-7 " src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${relic.main_affix.icon}` } alt="Personagem" />
                                                <p>{relic.main_affix.name}</p>
                                            </div>
                                            <p className="text-center py-1 ">{relic.main_affix.percent? `${(relic.main_affix.value * 100).toFixed(1)}%` : Math.floor(relic.main_affix.value)}</p>
                                        </div>
                                        {/*subs status */}
                                        {relic.sub_affix?.map((attr:any, attrIndex:number)=>(
                                            <div key={attrIndex} className={`flex w-full justify-between text-[0.7rem] ${attrIndex%2==1 ?"bg-white bg-opacity-5":''}`}>
                                                <div className={`flex items-center`}>
                                                    <img className="w-5 h-5 " src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${attr.icon}` } alt="Personagem" />
                                                    <p>{attr.name}</p>
                                                </div>
                                                <p className="text-center py-1">{attr.percent? `${(attr.value * 100).toFixed(1)}%` : Math.floor(attr.value)}</p>
                                            </div>
                                            
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
    
                </div>
            ): (
                <p>Não ha relíquias equipadas.</p>
            )}
        </div>
    )
}

export default RelicDetail