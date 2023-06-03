interface EmptyContentProps{

}

const EmptyContent = (props: EmptyContentProps) =>{
    return (
        <main className="bg-gray-600 h-screen flex justify-center items-center text-cyan-600 text-2xl font-bold">
            <div>Busque por um Id existente.</div>
            <div>loading</div>
            <div>Id não encontrado.</div>
        </main>
    )
}

export default EmptyContent