interface EmptyContentProps{
    isLoading: boolean
}

const EmptyContent = (props: EmptyContentProps) =>{
    return (
        <main className="bg-gray-600 h-screen flex justify-center items-center text-cyan-500 text-3xl font-bold">
            {props.isLoading ? (
                <div>
                    <img src="/images/loading.svg" alt="loading" />
                </div>
            ): (
                <div>Busque por um Id existente.</div>
            )}
        </main>
    )
}

export default EmptyContent