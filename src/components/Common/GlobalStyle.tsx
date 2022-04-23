import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('http://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #___gatsby {
    height: 100%;
  }
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  font-family { 
    'Roboto', sans-serif;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle