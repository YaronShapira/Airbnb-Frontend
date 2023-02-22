import { IFilterBy } from '../../../interfaces/filterby-interface'
import Counter from './Counter'

interface Props {
    handleGuestsCounter: (inc: number, filterByField: string) => void
    filterBy: IFilterBy
}

export default function FilterGuests({ handleGuestsCounter, filterBy }: Props) {
    return (
        <section className='filter-module filter-guests'>
            <div className='row adults'>
                <div className='col'>
                    <p className='header'>Adults</p>
                    <p className='desc'>Ages 13 or above</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'adults'} count={filterBy.adults} />
            </div>
            <div className='row children'>
                <div className='col'>
                    <p className='header'>Children</p>
                    <p className='desc'>Ages 2-12</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'children'} count={filterBy.children} />
            </div>
            <div className='row infants'>
                <div className='col'>
                    <p className='header'>Infants</p>
                    <p className='desc'>Under 2</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'infants'} count={filterBy.infants} />
            </div>
            <div className='row pets'>
                <div className='col'>
                    <p className='header'>Pets</p>
                    <p className='desc underline'>Bringing a service animal?</p>
                </div>
                <Counter handleGuestsCounter={handleGuestsCounter} field={'pets'} count={filterBy.pets} />
            </div>
        </section>
    )
}
