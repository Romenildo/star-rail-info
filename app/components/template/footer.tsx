
interface FooterProps{

}

const Footer = (props: FooterProps) =>{
    return (
        <footer className="flex justify-center items-center h-20 bg-gray-800">
            <div className="flex flex-col text-center text-cyan-600 ">
                <p>Desenvolvido por <a href="https://github.com/Romenildo" target="_blank">Romenildo</a> © 2023  </p>
                <p>Dados de <a href="https://march7th.xiaohei.moe/zh/resource/mihomo_api.html" target="_blank">mihomo-api</a></p>
            </div>
        </footer>
    )
}

export default Footer