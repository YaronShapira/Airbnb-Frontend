interface Props {
    onClickFunc: () => void
}

export default function StrongDarkOverlay({ onClickFunc }: Props) {
    return <div className='strong-dark-overlay' onClick={onClickFunc}></div>
}
