import React, {useState, useEffect} from "react"
import Amazon from "./assets/amazon1.png"
import Sirio from "./assets/sirio.png"
import Vai from "./assets/vai.png"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Informacoes = styled.div `
border:solid red;
display: flex;
justify-content:space-around;
align-items:center;
height: 40vh;

`


const Patrocinadores = styled.div `
border: solid green;
display:flex;
justify-content:space-evenly;
align-items:center;
height:60vh;



`


function App () {

const [marca,setMarca] = useState (Vai)

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`

useEffect(() => {
  if (marca === Vai) {
    document.querySelector("div").style.backgroundColor = "#F8BF15";
    document.querySelector("div").style.transition="ease-in-out 0.8s"
 document.querySelector("div>h2").style.color = "#fffff";

  } else if (marca === Amazon) {
    document.querySelector("div").style.backgroundColor = "#FF00FF";
    document.querySelector("div").style.transition="ease-in-out 0.8s"
  }else if(marca=== Sirio){
    document.querySelector("div").style.backgroundColor = "green";
    document.querySelector("div").style.transition="ease-in-out 0.8s"
  }
})

  return(
    <section>
    <GlobalStyle/>

    <Informacoes>
      <img src={marca} alt =""/>
    <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'
</h2>
    
    </Informacoes>

    <Patrocinadores>
      <div>
      <img onClick={()=>{setMarca(Amazon)}} src={Amazon} alt =""/>
      <img onClick={()=>{setMarca(Vai)}} src={Vai} alt =""/>
      <img onClick={()=>{setMarca(Sirio)}} src={Sirio} alt =""/>

    
      </div>
    </Patrocinadores>
    
    </section>
  )
}

export default App