interface CharacterProps{
    character?:any
}

const Character = (props: CharacterProps) =>{
    return (
        <div className="w-full bg-gray-600">
            Charactter
        </div>
    )
}

export default Character