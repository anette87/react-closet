import React from 'react'

export default function ItemSearch(props){
    
    return(
        <div>
            <select name="searchOption" id="searchOption" onChange={props.handleSelectChange}>
                {props.options().map(option => <option value={option}>{option}</option>)}
            </select>
            <input disabled={!props.enabledSearch} name="search" type="text" value={props.search} placeholder="Search Items" onChange={props.handleSearchChange} />
        </div>
    )
}