import React, {useState, useEffect} from 'react';
import logo from './images/icon-dollar.svg'
import logo2 from './images/icon-person.svg'
// import $ from 'jquery'
import Display from './Display'
import WebFont from 'webfontloader';

const Form = (props) => {

    const [tip, setTip] = useState("")
    const [tipp, setTipp] = useState("")
    const [error, setError] = useState("")
    const [num, setNum] = useState("")
    const [num2, setNum2] = useState("")
    const [num3, setNum3] = useState("")
    const [total, setTotal] = useState("0.00")
    const [single, setSingle] = useState("0.00")
    const [err, setErr] = useState("")
    

    // $(document).ready(function() {
    //     $(window).keydown(function(event){
    //         if (event.keyCode == 13) {
    //             event.preventDefault()
    //             return false;
    //         }
    //     })
    // })
    // useEffect(() => {
    //     WebFont.load({
    //       google: {
    //         families: ['Space Mono']
    //       }
    //     });
    //    }, []);

    const handleChange = (e) => {
        setTip("")
        setTipp("")
        setErr('')
        setError('')
        setNum(e.target.value)
    }

    const handleChangetwo = (e) => {
        setTip("")
        setTipp("")
        setErr("")
        setError("")
        setNum2(e.target.value)
    }

    const handleClicktwo = (e) => {
        // e.preventDefault()
        setSingle('0.00')
        setErr("")
        const value2 = parseFloat(num)
        console.log(typeof value2)
        if (isNaN(value2)) {
            setTip("Enter a price!")
            console.log("error")
            return;
        }

        const button = document.querySelector('.active')

        if (!button) {
            setError("Put a percentage number!")
            return;
        }

        const value3 = parseFloat(button.value/100)
        console.log(value3)

        const val = parseFloat(num2)
        console.log(val)
        if (isNaN(val)) {
            setTipp("Enter the number of people!")
            console.log("error")
            return;
        }

        if (val === 0 || val === 1) {
            setTipp("Can't be zero or one!")
            console.log("error")
            return;
        }
       
        let totalval = val * value2* value3
        totalval = Math.round((totalval + Number.EPSILON) * 100) / 100
        setTotal(totalval)
    }
    const handleClickthree = (e) => {
        // e.preventDefault()
        setTotal("0.00")
        setTipp("")
        if (num2 !== "") {
            setErr("Expect no number of person to find only tip amount")
            return;
        }
        const value2 = parseFloat(num)
        // console.log(typeof value2)
        console.log(typeof value2)
        if (isNaN(value2)) {
            setTip("Enter a price!")
            console.log("error")
            return;
        }

        const button = document.querySelector('.active')
        if (!button) {
            setError("Put a percentage number!")
            return;
        }
        const value3 = parseFloat(button.value/100)
        console.log(value3)
        let totalval = value2 * value3
        totalval = Math.round((totalval + Number.EPSILON) * 100) / 100
        setSingle(totalval)
    }

    const handleChangethree = (e) => {
        setError("")
        setTipp("")
        setTip("")
        setErr('')
        if (e.target.value !== "") {
            setNum3(e.target.value)
            const buttons = document.querySelectorAll('.buttons')
            Array.from(buttons).forEach(function(button) {
                if (button.classList.contains('active')) {
                    button.classList.remove('active')
                }
            })
            e.target.classList.add('active')
        }

        if (e.target.value === "") {
            setNum3("")
            e.target.classList.remove('active')
        }
    }

    const handleClick = (e) => {
        setError("")
        setTipp("")
        setErr("")
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
            return;
        }

        const buttons = document.querySelectorAll('.buttons')
        Array.from(buttons).forEach(function(button) {
            if (button.classList.contains('active')) {
                button.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    }

    const remove = () => {
        const element = document.querySelector('.active')
        element.classList.remove('active')
    }
    return (
        <div className='frame'>
            <form action="">
                <div className="input-box box-relate">
                    <label htmlFor="bill">Bill</label>
                    <span className="error">{tip}</span>
                    <div className='icon'>
                        <input type="text" autoComplete='off' value={num} onChange={handleChange} className='input bill' name="" id="bill" dir='rtl' />
                        <img src={logo} id='dollar' alt="Dollar sign" />
                    </div>
                    
                </div>
                <div className="input-box">
                    <label htmlFor="select">Select Tip %</label>
                    <div className="grpbtn">
                        <p className="percent">{error}</p>
                        <div className="grp1">
                            <input type="button" className='buttons' value="5" onClick={handleClick} id="select"/>
                            <input type="button" className='buttons' value="10" onClick={handleClick} id="select"/>
                            <input type="button" className='buttons' value="15" onClick={handleClick} id="select"/>
                        </div>
                        <div className="grp2">
                            <input type="button" className='buttons' value="25" onClick={handleClick} id="select"/>
                            <input type="button" className='buttons' value="50" onClick={handleClick} id="select"/>
                            <input type='number' min="0" max="100" className='buttons txtbtn' value={num3} onChange={handleChangethree} name="" id="select" />
                        </div>
                    </div>
                </div>
                <div id='last' className="input-box box-relate box">
                    <label htmlFor="num">Number of People</label>
                    <span className="error tip">{tipp}</span>
                    <div className="icon">
                        <input type="text" autoComplete='off' className='input billtwo' value={num2} onChange={handleChangetwo} name="" id="num" dir='rtl'/>
                        <img src={logo2} id='person' alt="Logo of a person" />
                    </div>
                    
                </div>
                
                <button type="button" className='butt butt1' onClick={handleClickthree}>Tip amount for 1 person</button>
                <button type="button" className='butt butt2' onClick={handleClicktwo}>Tip amount for multiple persons</button>
                <button type='button' className='butt4 butt3' onClick={handleClickthree}>For 1</button>
                <button type='button' className='butt5 butt3' onClick={handleClicktwo}>For multple</button>
                <div className="error err">{err}</div>
            </form>
            <div className='display'>
                {/* <div>{single}</div>
                <div>{total}</div> */}
                <Display 
                    single={single} 
                    setSingle={setSingle} 
                    setErr={setErr} 
                    setTipp={setTipp} 
                    setTip={setTip} 
                    setError={setError} 
                    total={total} 
                    setTotal={setTotal} 
                    setNum={setNum} 
                    setNum2={setNum2} 
                    setNum3={setNum3} 
                    remove={remove}
                />
            </div>
        </div>
        
    )
}


export default Form;