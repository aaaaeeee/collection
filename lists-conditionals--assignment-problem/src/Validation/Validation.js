import React from 'react';

const validation = (props) => {
    let valiDationMessage ='Text long enough';

    if(props.inputLength <= 5){
        valiDationMessage ='Too short';
    }
    return(
        <div>
            <p>{valiDationMessage}</p>
        </div>
    );
}

export default validation;