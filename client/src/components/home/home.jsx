import React, {useState} from "react";
import { botones } from "../data";
import {FiDelete} from 'react-icons/fi'
import './home.css';
export const Home = () => {

const [result, setResult] = useState("");

const calculate = () => {
    try{
        setResult(eval(result).toString())
    }catch(err){
        setTimeout(() => {
            setResult("")
        },2000);
        setResult("Error")
    }
}
const handleClick = valor => {
    setResult(result.concat(valor.target.name))
}

const clear = () => {
    setResult("")
}

const deleteOne = () => {
    setResult(result.slice(0, -1))
}
    return(
        <div className="divHome">
            <div className="container">
                    <form className="formDisplay">
                        <input type='text' value={result} />
                    </form>
            <div className="calculatorDiv">
                        <button  onClick={deleteOne}  className='deleteButton'><FiDelete/></button>   
                        <button name="C" onClick={clear} className="deleteTodo">C</button>
                        <button name="7" className="buttonNum" onClick={handleClick}>7</button>
                        <button name="8" className="buttonNum" onClick={handleClick}>8</button>
                        <button name="9" className="buttonNum" onClick={handleClick}>9</button>
                        <button name="/" className="buttonOper" onClick={handleClick}>/</button>
                        <button name="4" className="buttonNum" onClick={handleClick}>4</button>
                        <button name="5" className="buttonNum" onClick={handleClick}>5</button>
                        <button name="6" className="buttonNum" onClick={handleClick}>6</button>
                        <button name="*" className="buttonOper" onClick={handleClick}>*</button>
                        <button name="1" className="buttonNum" onClick={handleClick}>1</button>
                        <button name="2" className="buttonNum" onClick={handleClick}>2</button>
                        <button name="3" className="buttonNum" onClick={handleClick}>3</button>
                        <button name="+" className="buttonOper" onClick={handleClick}> +</button>
                        <button name="." className="buttonNum" onClick={handleClick}>.</button>
                        <button name="0" className="buttonNum" onClick={handleClick}>0</button>
                        <button className="buttonFin" onClick={calculate}>=</button>
                        <button name="-" className="buttonOper" onClick={handleClick}>-</button>
                </div>
        </div>
    </div>
    )

};


export default Home;
