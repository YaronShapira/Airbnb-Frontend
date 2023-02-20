interface Props {
    onClickFunc: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DarkOverlay({ onClickFunc }: Props) {
    return <div className='dark-overlay' onClick={() => onClickFunc(prevState => !prevState)}></div>
}
