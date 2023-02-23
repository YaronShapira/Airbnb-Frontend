import regionImgAll from '../../../../assets/img/regions/all.webp'
import regionImgME from '../../../../assets/img/regions/middle-east.webp'
import regionImgIT from '../../../../assets/img/regions/italy.webp'
import regionImgFR from '../../../../assets/img/regions/france.webp'
import regionImgSA from '../../../../assets/img/regions/south-america.webp'
import regionImgUSA from '../../../../assets/img/regions/usa.webp'

export function FilterLocation({ onSelectRegion, searchBy }: any) {
    const regions = [
        { id: 'all', label: "I'm Flexible", img: regionImgAll },
        { id: 'middle-east', label: 'Middle East', img: regionImgME },
        { id: 'italy', label: 'Italy', img: regionImgIT },
        { id: 'south-america', label: 'South America', img: regionImgSA },
        { id: 'france', label: 'France', img: regionImgFR },
        { id: 'usa', label: 'United States', img: regionImgUSA },
    ]

    return (
        <section className='search-module search-location'>
            <h4 className='title'>Search by region</h4>
            <div className='regions'>
                {regions.map(r => {
                    return (
                        <div key={r.id} className='region'>
                            <img src={r.img} alt='' className='region-img' />
                            <p className='label'>{r.label}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
