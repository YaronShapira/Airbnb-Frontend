import { IFilter } from '../../../interfaces/filter-interface'

interface Props {
    filter: IFilter
}

export default function Filter({ filter }: Props) {
    return (
        <div className='filter'>
            <img src={filter.img} alt='' />
            <p>{filter.filter}</p>
        </div>
    )
}
