
interface RelicDetailProps{
    relics: any
}

const RelicDetail = (props: RelicDetailProps) =>{
    console.log(props.relics)

    const selectBgColor=(rarity:number)=>{
        if(rarity === 5) return "bg-gradient-to-br from-amber-800 to-yellow-300"
        if(rarity === 4) return "bg-gradient-to-br from-purple-900 to-purple-300"
        if(rarity === 3) return "bg-gradient-to-br from-blue-900 to-blue-300 "
    }

    return (
        <div>
            {props.relics.length > 0? (
                <div className="flex h-[650px] min-h-[650px] min-w-[800px]"> 

                <ul className="flex flex-col  flex-wrap text-xs">
    
                    {props.relics?.map((relic:any, index:number)=>(
                        <li key={index} className="my-3 mx-3 px-2 py-1 bg-gray-500 bg-opacity-20 rounded-md">
                            <div>
                                <span className="text-yellow-500">{relic.name}</span><span className="ml-2 text-[1.3em]">+{relic.level}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-full ${selectBgColor(relic.rarity)}`}>
                                    <img className="w-16 h-16" src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${relic?.icon}` } alt="Personagem" />
                                </div>
                                <div className="w-[250px]">
                                    {relic.sub_affix?.map((attr:any, attrIndex:number)=>(
                                        <div key={attrIndex} className={`flex w-full justify-between ${attrIndex%2==1 ?"bg-white bg-opacity-5":''}`}>
                                            <div className={`flex items-center`}>
                                                <img className="w-7 h-7 " src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${attr.icon}` } alt="Personagem" />
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
                <div className="relative top-2/4 w-[360px] mt-5">
                    <p className="text-[1.1em] text-gray-300">Efeito de Conjunto</p>
                    <div className="w-full border-t  border-gray-400 my-1" />
                </div>
    
            </div>
            ): (
                <p>Não ha relíquias equipadas.</p>
            )}
        </div>
    )
}

export default RelicDetail