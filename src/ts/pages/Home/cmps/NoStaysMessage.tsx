interface Props {
    onRemoveFilter: () => void
}

export default function NoStaysMessage({ onRemoveFilter }: Props) {
    return (
        <div className='no-stays-message'>
            <h2 className='heading'>No exact matches</h2>
            <p>Try changing or removing some of your filters or adjusting your search area.</p>
            <button onClick={onRemoveFilter}>Remove price filter</button>
        </div>
    )
}
