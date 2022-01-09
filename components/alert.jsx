

const Alert = ({winLose, setReset,setSetup}) => {
    const resetHandler = () => {
        setSetup(true)
        return setReset(true);
    }
    return (
        <>
        <div className={winLose === "win" ? "alert win" : "alert lose"}>
        <h1>{winLose}</h1>
        </div>
        <button className="reset-button" onClick={() => resetHandler()}>Play Again</button>
        </>
    )
}

export default Alert