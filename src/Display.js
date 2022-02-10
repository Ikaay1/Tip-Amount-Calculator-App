import React from 'react';

const Display = (props) => {

    const handleClick = () => {
        props.setSingle("0.00")
        props.setTotal("0.00")
        props.setNum("")
        props.setNum2("")
        props.setNum3("")
        props.setErr("")
        props.setError("")
        props.setTip("")
        props.setTipp("")
        props.remove()
    }
    return(
        <div className='displaycontainer'>
            <div className="flexone">
                <div className="descrip">
                    <div className="d1">Tip Amount</div>
                    <p className="d2">for 1 person</p>
                </div>
                <h1 className="amount1">
                    ${props.single}
                </h1>
            </div>
            <div className="flextwo">
                <div className="descrip2">
                    <div className="d1">Tip Amount</div>
                    <p className="d2">for multiple persons</p>
                </div>
                <h1 className="amount2">
                    ${props.total}
                </h1>
            </div>
            <button type='button' className='reset' onClick={handleClick}>RESET</button>
        </div>
    )
}

export default Display;