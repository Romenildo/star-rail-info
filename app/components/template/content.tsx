'use client'

interface ContentProps{
    profile?: any
}


//para testes 801883292
const Content = (props: ContentProps) =>{

    return (
        <main className="bg-gray-600 h-screen text-cyan-400 flex justify-center flex-col items-center">
            <div>{props.profile?.player?.uid}</div>
            <div>{props.profile?.player?.name}</div>
            <div>{props.profile?.player?.level}</div>
            <div>{props.profile?.player?.signature}</div>
        </main>
    )
}

export default Content