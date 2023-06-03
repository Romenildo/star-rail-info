'use client'

import { useState } from "react"

interface HeaderProps{
    onClick: (id: string) => void
}

const Header = (props: HeaderProps) =>{

    const [id, setId] = useState<any>('')

    return (
        <header className="flex bg-gray-800 h-20 border-b-1 border-cyan-400 shadow-cyan-300 shadow-sm">
            <div className="flex">
                <img src="images/Honkai_Star_Rail_logo.png" alt="logo" width="180" className="mx-7 hover:cursor-pointer" />
                
                <div className="flex items-center">
                    <input type="text"
                            id="id"
                            name="id"
                            value={id}
                            onChange={(e)=>{setId(e.target.value)}}
                            placeholder="Buscar ID"
                            className="h-9 bg-gray-600 px-3 text-cyan-500"
                    />
                    <button 
                        className="bg-cyan-400 m-5 p-1.5 px-3 rounded-sm hover:bg-cyan-500 text-white font-semibold"
                        onClick={()=>{props.onClick(id)}}
                    >
                        Pesquisar
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header