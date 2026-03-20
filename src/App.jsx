import { useState } from 'react'
import './App.scss'

function App() {
  
  const [score, setScore] = useState([0, 0])
  const [result, setResult] = useState(String)
  const [img1, setImg1] = useState("/Reshiram.png")
  const [img2, setImg2] = useState("/Zekrom.png")
  const [mode, setMode] = useState(false)
  const [action, setAction] = useState(String)

  function handleClick(i){
    let t = i
    console.log(t)

    function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
    }

    let o = getRandomInt(mode ? 5 : 3)
    console.log(o)

    if (t===1 && o===1){
      setResult("Egalité")
      setAction("Draw...")
    }
    if (t===2 && o===2){
      setResult("Egalité")
      setAction("Draw...")
    }
    if (t===3 && o===3){
      setResult("Egalité")
      setAction("Draw...")
    }
    if (t===1 && o===2){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Paper covers Rock")
    }
    if (t===2 && o===3){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Scissors cuts Paper")
    }
    if (t===3 && o===1){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Rock crushes Scissors")
    }
    if (t===1 && o===3){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Rock crushes Scissors")
    }
    if (t===2 && o===1){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Paper covers Rock")
    }
    if (t===3 && o===2){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Scissors cuts Paper")
    }


    if (t===4 && o===4){
      setResult("Egalité")
      setAction("Draw...")
    }
    if (t===5 && o===5){
      setResult("Egalité")
      setAction("Draw...")
    }

    if (t===4 && o===1){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Rock crushes Lizard")
    }
    if (t===4 && o===2){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Lizard eats Paper")
    }
    if (t===4 && o===3){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Scissors decapitates Lizard")
    }
    if (t===4 && o===5){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Lizard poisons Spock")
    }

    if (t===5 && o===1){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Spock vaporizes Rock")
    }
    if (t===5 && o===2){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Paper disproves Spock")
    }
    if (t===5 && o===3){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Spock smashes Scissors")
    }
    if (t===5 && o===4){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Lizard poisons Spock")
    }
    if (t===1 && o===4){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Rock crushes Lizard")
    }
    if (t===1 && o===5){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Spock vaporizes Rock")
    }
    if (t===2 && o===4){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
      setAction("Lizard eats Paper")
    }
    if (t===2 && o===5){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Paper disproves Spock")
    }
    if (t===3 && o===4){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Scissors decapitates Lizard")
    }
    if (t===3 && o===5){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
      setAction("Spock smashes Scissors")
    }


    if(t===1){
      setImg1("/Grolem.png")
    }
    if(t===2){
      setImg1("/Phyllali.png")
    }
    if(t===3){
      setImg1("/Cizayox.png")
    }
    if(t===4){
      setImg1("/Baggaïd.png")
    }
    if(t===5){
      setImg1("/Neitram.png")
    }
    if(o===1){
      setImg2("/Grolem.png")
    }
    if(o===2){
      setImg2("/Phyllali.png")
    }
    if(o===3){
      setImg2("/Cizayox.png")
    }
    if(o===4){
      setImg2("/Baggaïd.png")
    }
    if(o===5){
      setImg2("/Neitram.png")
    }

    return score

  }

  function reset(){
  setScore([0, 0])
  setResult("Ok on recommence...")
  setImg1("/Reshiram.png")
  setImg2("/Zekrom.png")
  setAction("...")

}

function modeJeu(){
  setMode(prev => !prev)
}


  return (
    <>
      <div className='game'>
        <h1>pfc</h1>
        <p className="score">
          Score Joueur : {score[0]} <br/>
          Score Ordi : {score[1]}
        </p>
        <p className='result'>{result}</p>
        <div className='troisb'>
          <button className='bouton'><img className='status-img' onClick={() => handleClick(1)} src="/Grolem.png" alt="Pierre" /></button>
          <button className='bouton'><img className='status-img' onClick={() => handleClick(2)} src="/Phyllali.png" alt="Feuille" /></button>
          <button className='bouton'><img className='status-img' onClick={() => handleClick(3)} src="/Cizayox.png" alt="Ciseaux" /></button>
          <button className='bouton' style={{ display: mode ? "block" : "none" }}><img className='status-img' onClick={() => handleClick(4)} src="/Baggaïd.png" alt="Lizard" /></button>
          <button className='bouton' style={{ display: mode ? "block" : "none" }}><img className='status-img' onClick={() => handleClick(5)} src="/Neitram.png" alt="Spock" /></button>
        </div>
        <p className='action'>{action}</p>
        <div className='affiche'>
          <p>Coup du joueur → </p>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <p>← Coup de l'ordi</p>
        </div>
        <button className="reset" onClick={reset}>Rejouer</button>
        <button className='mode' onClick={modeJeu}>Lizard Spock mode</button>
      </div>
    </>
  )
}

export default App
