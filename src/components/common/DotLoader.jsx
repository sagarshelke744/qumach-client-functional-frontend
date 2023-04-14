import React from 'react'
import styled from "styled-components";

const DotLoader = () => {
  return (
    <div>
    <span class="btnLoader"></span>
    </div>
  )
}

export default DotLoader

const Style = styled.div`
padding: 2rem;
margin: 2rem;
/* body {
	background-color: #085dad;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh
} */
.btnLoader {
  --dot1: #53ff09;
  --dot2: #16ba04b6;
  --dot3: #0070d966;
  --dot4: #05ce4fb3;
  --shadow1: 96px;
  --shadow2: 48px;
  --shadow3: -48px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--dot3);
  box-shadow: var(--shadow1) 0 var(--dot1), var(--shadow2) 0 var(--dot2), var(--shadow3) 0 var(--dot4);
  position: relative;
  animation: 700ms linear 1ms infinite alternate flash;
}

@keyframes flash {
  0%, 100% {
	background-color: var(--dot4);
    box-shadow: var(--shadow1) 0 var(--dot2), var(--shadow2) 0 var(--dot3), var(--shadow3) 0 var(--dot1);
  }
  25% {
    background-color: var(--dot1);
    box-shadow: var(--shadow1) 0 var(--dot3), var(--shadow2) 0 var(--dot4), var(--shadow3) 0 var(--dot2);
  }
  50% {
	background-color: var(--dot2);
    box-shadow: var(--shadow1) 0 var(--dot4), var(--shadow2) 0 var(--dot1), var(--shadow3) 0 var(--dot3);
  }
  75% {
    background-color: var(--dot3);
    box-shadow: var(--shadow1) 0 var(--dot1), var(--shadow2) 0 var(--dot2), var(--shadow3) 0 var(--dot4);
  }
}
      
`;