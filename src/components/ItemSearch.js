import React from 'react'

export default function ItemSearch(props){
    
    return(
        <div>
            <div class="row backgroud-white">
                <div class="col-12 col-md-3 right-text">
                    <select class="btn btn-secondary dropdown-toggle" name="searchOption" id="searchOption" onChange={props.handleSelectChange}>
                        {props.options().map(option => <option value={option}>{option}</option>)}
                    </select>
                </div>
                <div class="col-12 col-md-9 left-text">
                    <input disabled={!props.enabledSearch} name="search" type="text" value={props.search} class="form-control mb-4" placeholder="Search Items" onChange={props.handleSearchChange} />
                </div>
            </div> 
        </div>
    )
}

