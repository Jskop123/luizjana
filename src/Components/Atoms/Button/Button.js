import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
font-family: 'Lato', sans-serif;
font-weight: 700;
padding: 10px 15px;
background-color: ${({ primary }) => primary ? "red" : "#FFF250"  };
color: ${({ primary }) => primary ? "#eee" : "000"  };
border: none;
font-size: 1.2em;
border-radius: 10px;
box-shadow: 0px 8px 2px 0px rgba(0,0,0,0.75);
transition: .3s;
&:hover {
  cursor: pointer;
  box-shadow: 0px 4px 2px 0px rgba(0,0,0,0.75);
  transform: translateY(4px);
  opacity: .8;
}
`
const Button = ({styl, type, click, id, children}) => <Btn styl={styl} as={type} onClick={click} id={id}>{children}</Btn>
export default Button