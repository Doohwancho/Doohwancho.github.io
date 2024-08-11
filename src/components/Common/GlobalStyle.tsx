import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }


  // /post/posts에 .md 파일 리스트의 style을 담당
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    font-size: 2em;
    margin: 0;
  }

  h2 {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.17em;
    margin: 0;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.83em;
  }
`

const GlobalStyle: FunctionComponent = function () {
    return <Global styles={defaultStyle} />;
}

export default GlobalStyle
