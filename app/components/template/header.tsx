
interface HeaderProps{

}

const Header = (props: HeaderProps) =>{
    return (
        <header className="flex bg-gray-800 h-20 border-b-1 border-cyan-400 shadow-cyan-300 shadow-sm">
            <div className="flex">
                <img src="images/Honkai_Star_Rail_logo.png" alt="logo" width="180" className="mx-7 hover:cursor-pointer" />
                <div className="flex items-center">
                    <input type="text" placeholder="Buscar ID" className="h-9 bg-gray-600 px-3 text-cyan-500" />
                    <button className="bg-cyan-500 m-5 p-1.5 px-3 rounded-sm hover:bg-cyan-600 text-white">Pesquisar</button>
                </div>
            </div>

        </header>
    )
}

export default Header