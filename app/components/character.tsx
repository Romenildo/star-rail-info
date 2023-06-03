interface CharacterProps{
    character?:any
}

const Character = (props: CharacterProps) =>{
    return (
        <div className="w-full bg-gray-600">
            {props.character?.name}
        </div>
    )
}

export default Character