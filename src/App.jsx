import { useState } from 'react'
import './App.scss'

function App() {
  
  const [score, setScore] = useState([0, 0])
  const [result, setResult] = useState(String)
  const[img1, setImg1] = useState("/Reshiram.png")
  const[img2, setImg2] = useState("/Zekrom.png")

  function handleClick(i){
    let t = i
    console.log(t)

    function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
    }

    let o = getRandomInt(3)
    console.log(o)

    if (t===1 && o===1){
      setResult("Egalité")
    }
    if (t===2 && o===2){
      setResult("Egalité")
    }
    if (t===3 && o===3){
      setResult("Egalité")
    }
    if (t===1 && o===2){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
    }
    if (t===2 && o===3){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
    }
    if (t===3 && o===1){
      setResult("Ordi gagne ! ")
      setScore(s => [s[0], s[1]+1])
    }
    if (t===1 && o===3){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
    }
    if (t===2 && o===1){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
    }
    if (t===3 && o===2){
      setResult("Joueur gagne ! ")
      setScore(s => [s[0]+1, s[1]])
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
    if(o===1){
      setImg2("/Grolem.png")
    }
    if(o===2){
      setImg2("/Phyllali.png")
    }
    if(o===3){
      setImg2("/Cizayox.png")
    }

    return score

  }

  function reset(){
  setScore([0, 0])
  setResult("Ok on recommence...")
  setImg1("/Reshiram.png")
  setImg2("/Zekrom.png")

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
        <div className='3b'>
          <button className='bouton'><img className='status-img' onClick={() => handleClick(1)} src="/Grolem.png" alt="Pierre" /></button>
          <button className='bouton'><img className='status-img' onClick={() => handleClick(2)} src="/Phyllali.png" alt="Feuille" /></button>
          <button className='bouton'><img className='status-img' onClick={() => handleClick(3)} src="/Cizayox.png" alt="Ciseaux" /></button>


        </div>
        <button className="reset" onClick={reset}>Rejouer</button>

        <div className='affiche'>
          <p>Coup du joueur → </p>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <p>← Coup de l'ordi</p>
        </div>
      </div>
    </>
  )
}

export default App
