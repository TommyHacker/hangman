import {useState} from "react"


const Player = ({phrase,hiddenPhrase,setHiddenPhrase,movesLeft,setMovesLeft,lettersLeft,setLettersLeft,used,setUsed}) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const template = [...phrase];
        const templateHiddenPhrase = [...hiddenPhrase];
        const temporaryUsed = [...used]
        if(e.target.value === " ") return e.target.value = ""
        if(used.includes(e.target.value)){
            e.target.value = ""
            return
        }
        if (!template.includes(e.target.value)){
            temporaryUsed.push(e.target.value)
            setMovesLeft((movesLeft - 1))
            e.target.value = ""
          return  setUsed([...temporaryUsed])
        } 
        template.filter((letter, index) => {            
            if(e.target.value === letter){
                temporaryUsed.push(e.target.value)
                templateHiddenPhrase[index] = template[index]
                let count = lettersLeft - 1;
                setLettersLeft(--lettersLeft)


            }          
        })
        setUsed([...temporaryUsed])
        setHiddenPhrase(templateHiddenPhrase)
        e.target.value = "";
    }
    const uniqueArr = [...new Set([...used])]
    return (
        <div className="player-container">
        <input className="player" type="text" maxLength={1} onChange={(e) => submitHandler(e)} />
       <div className="letters-used">

        {uniqueArr.map((letter, index) => {
            return  <h2 className="letters" key={index} >{letter}</h2>
        })}
        </div>

        </div>
    )
}

export default Player;