import { useState } from 'react'
import { BsDash } from 'react-icons/bs'

export default function PriceFilter() {
    const [price, setPrice] = useState({ minPrice: '', maxPrice: '' })

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const value = ev.target.value.substring(2)
        if (isNaN(Number(value))) return
        const field: string = ev.target.name
        setPrice(prevPrice => ({ ...prevPrice, [field]: ev.target.value.substring(2) }))
    }
    return (
        <div className='price-filter'>
            <h5>Price range</h5>
            <p>The average nightly price is $75</p>
            <div className='inputs'>
                <label>
                    <p>min price</p>
                    <input type='text' name='minPrice' value={`$ ${price.minPrice}`} onChange={handleChange} />
                </label>
                <p className='dash'>
                    <BsDash fontSize={'30px'} />
                </p>
                <label>
                    <p>max price</p>
                    <input type='text' name='maxPrice' value={`$ ${price.maxPrice}`} onChange={handleChange} />
                </label>
            </div>
        </div>
    )
}
