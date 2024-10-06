'use client'
import { useRef } from "react";

function Guessing(){
    let userdata = useRef<HTMLInputElement|null>(null)
    let attempt = 0;
    function click(){
        let comp = Math.floor(Math.random()*10)
if(userdata){
    let userinput = userdata.current?.value
    let result =  userinput == comp.toString()
    let showresult = document.getElementById("result")as HTMLElement |null
    if(result === true && showresult){
     let get =  showresult.innerHTML = "you guess the right number congratulation"
     showresult.style.color = " rgb(223, 119, 44) "
    }
    else if(showresult && userinput ){
        let get =  showresult.innerHTML = `you guess the wrong number correct number is ${comp}`
        showresult.style.color = "red"
    }
    attempt += 1;
    let total = document.getElementById("attempt") as HTMLElement | null
    if(total){
        total.innerHTML = ` The number of attempt  is ${attempt.toString()}`
    }
}}

    return(
        <div className="main-container">
            <h1>Number guessing game</h1>
            <h3 style={{color: "rgb(223, 119, 44) "}}>Guess the number the between 0 to 10 </h3>
            <input ref={userdata}
             type="number" placeholder="Enter your number" ></input>
            <button onClick={click}>check my guess</button>
            <h3 id="result"></h3>
            <p id="attempt" style={{color: "brown"}}></p>

        </div>
    )
}
export default Guessing;