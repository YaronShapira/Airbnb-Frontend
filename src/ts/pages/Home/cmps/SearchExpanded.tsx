import DarkOverlay from '../../../cmps/DarkOverlay'

interface Props {
    isSearchOpen: boolean
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchExpanded({ isSearchOpen, setIsSearchOpen }: Props) {
    return (
        <>
            {isSearchOpen && <DarkOverlay onClickFunc={setIsSearchOpen}/>}
            <div className={`search-expanded ${isSearchOpen ? 'expanded' : ''}`}>SearchExpanded</div>
        </>
    )
}
