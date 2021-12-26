import {useState} from "react";
import './search.css'

const Search = ({cb = Function.prototype}) => {
    const [isValue, setValue] = useState('')

    const handleKey = (event) => {
        if (event.key === 'Enter') handleSubmit()
    }

    const handleSubmit = () => {
        cb(isValue)
    }

    return(
        <div className="row search">
            <div className="input-field col s12">
                <input
                    type="search"
                    id='search-field'
                    placeholder='search'
                    onKeyDown={handleKey}
                    onChange={event => setValue(event.target.value)}
                    value={isValue}
                />
            </div>

            <button
                className='btn search-btn'
                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    )
}

export default Search