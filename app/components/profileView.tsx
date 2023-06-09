'use client'

interface ProfileViewProps{
    profile: any
}

const ProfileView = (props: ProfileViewProps) =>{
    return (
        <div className="w-1/3 flex flex-col items-center mt-5 min-w-fit">
            
            <div className="bg-gray-800 w-full flex flex-col items-center p-2 rounded-tl-2xl">
                <p className="self-start ml-3 text-gray-400">Informações do usuário</p>
                <div className="bg-cyan-500 rounded-full">
                    <img src={`https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/${props.profile?.player?.avatar.icon}` }alt="img" crossOrigin="anonymous" />
                </div>
                <p className="text-gray-50 text-2xl py-2 font-bold">{props.profile?.player?.nickname}</p>

            </div>


            <div className="bg-gray-700 w-full flex items-center flex-col">
                <div className="m-3 w-full flex justify-evenly ">
                    <div className="bg-gray-900 rounded-full w-20 text-sm h-20 text-center flex flex-col justify-center items-center">
                        <p >Nível de desbravamento</p>
                        <p className="text-cyan-400 font-bold text-lg">{props.profile?.player?.level}</p>
                    </div>
                    <div className="bg-gray-900 rounded-full w-20 text-sm h-20 text-center flex flex-col justify-center items-center">
                        <p >Amigos</p>
                        <p className="text-cyan-400 font-bold text-lg">{props.profile?.player?.friend_count}</p>
                    </div>
                    <div className="bg-gray-900 rounded-full w-20 text-sm h-20 text-center flex flex-col justify-center items-center">
                        <p >Nível de Mundo</p>
                        <p className="text-cyan-400 font-bold text-lg">{props.profile?.player?.world_level}</p>
                    </div>
                </div>
                <div className="h-20 bg-gray-500 w-11/12 py-1 px-2 rounded-md border-2 border-gray-400 text-black font-semibold">
                    {props.profile?.player?.signature}
                </div>

                <div className="m-5 w-full">
                    <p className="text-cyan-500 px-5 font-semibold text-xl">Registros do Desbravamento</p>
                    <div className="mx-9 my-2 py-1 px-6 flex justify-between w-10/12 bg-gray-400 rounded-xl">
                        <p className="pt-0.5">Cones de Luz</p>
                        <p className="font-bold text-gray-800 text-xl">{props.profile?.player?.space_info?.light_cone_count}</p>
                    </div>
                    <div className="mx-9 my-2 py-1 px-6 flex justify-between w-10/12 bg-gray-400 rounded-xl">
                        <p className="pt-0.5">Áreas deescobertas</p>
                        <p className="font-bold text-gray-800 text-xl">{props.profile?.player?.space_info?.pass_area_progress}</p>
                    </div>
                    <div className="mx-9 my-2 py-1 px-6 flex justify-between w-10/12 bg-gray-400 rounded-xl">
                        <p className="pt-0.5">Conquistas desbloqueadas</p>
                        <p className="font-bold text-gray-800 text-xl">{props.profile?.player?.space_info?.achievement_count}</p>
                    </div>
                    
                </div>

                <div className="w-full m-3 px-5">
                    <p className="font-bold"> ID:{props.profile?.player?.uid}</p>
                    
                </div>

            </div>
        </div>
    )
}

export default ProfileView