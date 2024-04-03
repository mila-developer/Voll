import styled from "styled-components";
import logo from "./logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const Imagem = styled.img`
  padding: 2em 0;
  max-width: 100px;
`;

interface PropsCustomizadas {
  cor: string
}

const StepCustomizada = styled.div<PropsCustomizadas>`
  background-color: ${({cor}) => cor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`

export default function Cadastro() {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  return (
    <>
    <Imagem src={logo} alt="Logo da Voll" />
    <Stepper activeStep={etapaAtiva}>
      <Step>
        <StepLabel 
        StepIconComponent={(props) => (
          <StepCustomizada cor={props.active? 'lightblue' : 'lightgrey'} />
        )}
        />
      </Step>
      <Step>
        <StepLabel 
        StepIconComponent={(props) => (
          <StepCustomizada cor={props.active? 'lightblue' : 'lightgrey'} />
        )}
        />
      </Step>
    </Stepper>
    </>
  )
 }