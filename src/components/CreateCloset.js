import React from "react";
import { createCloset } from '../actions/closetAction'
import { connect } from 'react-redux';

function CreateCloset(props){


    const handleCreateClosetClick = (e) =>{
        const closet = {};
        props.createCloset(closet)
    }

    return(
        <div>
            <div className="App" id="createCloset">
                <h1 class="text-xl-center badge-dark rounded-pill shadow-lg p-3 title1" onClick={handleCreateClosetClick}> Click Here To Create Your Closet!</h1>   
            </div>
        </div>
    )

}

export default connect(null, { createCloset })(CreateCloset);