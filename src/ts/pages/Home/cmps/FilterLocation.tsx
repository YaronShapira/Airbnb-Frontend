import regionImgAll from '../../../../assets/img/regions/all.webp'
import regionImgME from '../../../../assets/img/regions/middle-east.webp'
import regionImgIT from '../../../../assets/img/regions/italy.webp'
import regionImgFR from '../../../../assets/img/regions/france.webp'
import regionImgSA from '../../../../assets/img/regions/south-america.webp'
import regionImgUSA from '../../../../assets/img/regions/usa.webp'

export function FilterLocation({ onSelectRegion, filterBy }: any) {
    const regions = [
        { id: 'all', label: "I'm Flexible", img: regionImgAll },
        { id: 'middle-east', label: 'Middle East', img: regionImgME },
        { id: 'italy', label: 'Italy', img: regionImgIT },
        { id: 'south-america', label: 'South America', img: regionImgSA },
        { id: 'france', label: 'France', img: regionImgFR },
        { id: 'usa', label: 'United States', img: regionImgUSA },
    ]

    return (
        <section className='filter-modal filter-location'>
            <h4 className='title'>Search by region</h4>
            <div className='regions'>
                {regions.map(r => {
                    return (
                        <div
                            onClick={() => {
                                onSelectRegion(r.label)
                            }}
                            key={r.id}
                            className='region'
                        >
                            <div
                                className={`region-img ${filterBy.whereTo === r.label ? 'active' : ''}`}
                                style={{ backgroundImage: `url("${r.img}")` }}
                            ></div>
                            <div>{r.label}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
