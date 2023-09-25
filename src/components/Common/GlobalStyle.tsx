import React, { FunctionComponent } from 'react'
import { Global, css } from '@Emotion/react'

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

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }



  //table of contents
	.table-of-contents {
		font-family: Arial, sans-serif;
		border: 1px solid #e0e0e0;
		padding: 10px 20px;
		width: 300px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
	}

	.table-of-contents ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.table-of-contents li {
		color: black;
	}

	.table-of-contents a {
		text-decoration: none;
		color: inherit;
		transition: color 0.2s;
	}

	.table-of-contents a:hover {
		color: #777;
	}

	.table-of-contents li > p {
		font-weight: bold;
		margin-bottom: 5px;
	}

	.table-of-contents li ul li {
		margin-left: 20px;
	}
	.table-of-contents li ol {
		padding: 0;
	}

`

const GlobalStyle: FunctionComponent = function () {
    return <Global styles={defaultStyle} />;
}

export default GlobalStyle
