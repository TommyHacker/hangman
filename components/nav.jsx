

const Nav = ({setup,setSetup}) => {
    return (
        <nav>
            <ul>
                <button className="new-game-btn" onClick={() => setSetup(!setup)}>New Game</button>
            </ul>
        </nav>
    )
}

export default Nav