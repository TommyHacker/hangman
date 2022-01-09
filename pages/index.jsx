const Index = ({phrase,hiddenPhrase,movesLeft}) => {
    let render = (9 - movesLeft);

    const caps = [...hiddenPhrase].join("").toString().toUpperCase()
    return (
        <>
            <h1 className="title">Hangman!</h1>
        <h2 className="hidden-phrase">{caps}</h2>
      {render >= 1 ? <img className="hangManPicture floor" src={`/1.svg`} /> : ""}
      {render >= 2 ? <img className="hangManPicture post" src={`/2.svg`} /> : "" }
      {render >= 3 ?  <img className="hangManPicture roof" src={`/3.svg`} /> : "" }
      {render >= 4 ? <img className="hangManPicture corner" src={`/4.svg`} /> : "" }
      {render >= 5 ? <img className="hangManPicture noose" src={`/5.svg`} /> : "" }
      {render >= 6 ? <img className="hangManPicture head" src={`/6.svg`} /> : "" }
      {render >= 7 ? <img className="hangManPicture body" src={`/7.svg`} /> : "" }
      {render >= 8 ? <img className="hangManPicture arms" src={`/8.svg`} /> : "" }
      {render >= 9 ? <img className="hangManPicture legs" src={`/9.svg`} /> : "" }

        </>
    )
}

export default Index