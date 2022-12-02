import React, { useState } from 'react';
import './InputSearch.css';

import SearchIcon from '@mui/icons-material/Search';

const InputSearch = () => {

    const [isSearchToggle, setIsSearchToggle] = useState(false)
    const submitData = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='shadow'>
                <div>
                    <form action="get" className="second-form">
                        <input type="text" name="search" placeholder="Search Medicines/Health Products @18% Off..." className="second-input" autoComplete='off' />
                        <button type="submit" className="second-btn" style={{ fontSize: '18px' }} onClick={submitData}><SearchIcon className='search___icon'/></button>
                    </form>
                </div>
                {/* onClick={() => setIsSearchToggle(!isSearchToggle)} */}
                {/* <div className={isSearchToggle ? "input-search-field" : "input-search-field-not"}> */}
                    {/* <div className='search-layer'><p>myModal myModal magnifying mapDispatchToProps mapStateToProps mapDispatchToProps mapStateToProps magnifying</p></div> */}
                    {/* <div className='search-layer'><p>myModal myModal magnifying mapDispatchToProps mapStateToProps mapDispatchToProps mapStateToProps magnifying</p></div> */}
                    {/* <div className='search-layer'><p>myModal myModal magnifying mapDispatchToProps mapStateToProps mapDispatchToProps mapStateToProps magnifying</p></div> */}
                    {/* <div className='search-layer'><p>myModal myModal magnifying mapDispatchToProps mapStateToProps mapDispatchToProps mapStateToProps magnifying</p></div> */}
                    {/* <div className='search-layer'><p>myModal myModal magnifying mapDispatchToProps mapStateToProps mapDispatchToProps mapStateToProps magnifying</p></div> */}
                    {/* <div className='search-layer'><p>myModal myModal magnifying mapDispatchToProps mapStateToProps mapDispatchToProps mapStateToProps magnifying</p></div> */}
                {/* </div> */}
            </div>

        </>
    )
}
export default InputSearch;