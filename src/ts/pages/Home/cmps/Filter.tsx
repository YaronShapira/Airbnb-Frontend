import { IFilter } from '../../../interfaces/filter-interface'

interface Props {
    filter: IFilter
    selectedFilter: string
    onFilter: (selectedFilter: string) => void
}

export default function Filter({ filter, selectedFilter, onFilter }: Props) {
    return (
        <div
            className={`filter ${selectedFilter === filter.filter ? 'selected' : ''}`}
            onClick={() => onFilter(filter.filter)}
        >
            <img src={filter.img} alt='' />
            <p>{filter.filter}</p>
        </div>
    )
}
