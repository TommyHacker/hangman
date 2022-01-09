

const New = ({phrase, setPhrase , setSetup,setLettersLeft, setMovesLeft,setHiddenPhrase,setGameStart,setUsed}) => {
    const submitHandler = (e) => {
        e.preventDefault()
        if (phrase === "") return alert("please type something...")
        const template = [...phrase];
        const lettersCount = 0;
        setUsed([])
        setMovesLeft(9)
        template.map((letter, index) => {
            if(letter === " "){
                template[index] = " ";
            } else{
                template[index] = "_"
                ++lettersCount
            }

        })
        setLettersLeft(lettersCount)
        setHiddenPhrase(template)
        setSetup(false)        
        setGameStart(true)
    }
    return (
        <div className="new-game">
        <form onSubmit={(e) => submitHandler(e)}>
            <input type="text" name="phrase" autoComplete="off" placeholder="Word or Phrase here..." onChange={(e) => setPhrase(e.target.value.toLowerCase())} />
            <input type="submit" value="Start" />
        </form>
        </div>
    )
}

export default New