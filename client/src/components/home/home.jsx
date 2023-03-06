import React, {useState} from "react";
import './home.css'
export const Home = () => {

const [result, setResult] = useState("");

const handleClick = e => {
    setResult(result.concat(e.target.name))
}

const clear = () => {
    setResult("")
}


const calculate = () => {
    try{
        setResult(eval(result).toString())
    }catch(err){
        setTimeout(() => {
            setResult("")
        },3000);
        setResult("Error")
    }
}

    return(
        <div  className="divHome">
                <div className="calculatorMolde">
                    <form className="formDisplay">
                    <input type='text' value={result} />
                    </form>
                <div className="fila">
                <article className="articleButton">
                        <button  onClick={handleClick}>7</button>
                </article>
                <article className="articleButton">
                        <button name="8" onClick={handleClick}>8</button>
                </article>
                <article className="articleButton">
                        <button name="9" onClick={handleClick}>9</button>
                </article>
                <article className="articleButtonVal">
                        <button name="/" onClick={handleClick}>/</button>
                    </article>
                </div>
                <div className="fila">
                <article className="articleButton">
                        <button name="4" onClick={handleClick}>4</button>
                </article>
                <article className="articleButton">
                        <button name="5" onClick={handleClick}>5</button>
                </article>
                <article className="articleButton">
                        <button name="6" onClick={handleClick}>6</button>
                </article>
                <article className="articleButtonVal"><button name="*" onClick={handleClick}>*</button></article>
                </div>
                <div className="fila">
                <article className="articleButton">
                        <button name="1" onClick={handleClick}>1</button>
                </article>
                <article className="articleButton">
                        <button name="2" onClick={handleClick}>2</button>
                </article>
                <article className="articleButton">
                        <button name="3" onClick={handleClick}>3</button>
                </article>
                <article className="articleButtonVal"><button name="-" onClick={handleClick}>-</button></article>
                </div>
                <div className="fila">
                <article className="articleButton">
                    <button name="0" onClick={handleClick}>0</button>
                </article>
                <article className="articleButton"><button name="=" onClick={calculate} style={{backgroundColor:"purple"}}>=</button></article>
                <article className="articleButton"><button name="C" onClick={clear} style={{backgroundColor:"green"}}>C</button></article>
                <article className="articleButtonVal"><button name="+" onClick={handleClick}> +</button></article>
                </div>
                </div>
        </div>
    )

};


export default Home;
