import './Searching.css'

function Searching({ setSearchTerm }) {
    return (
        <div className='search'>
            <input onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search..." />
        </div>
    )
}
export default Searching;