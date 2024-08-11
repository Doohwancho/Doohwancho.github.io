import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 10px;
  }

  h2 {
  font-size: 1.5em;
  margin-top: 10px;
  margin-bottom: 10px;
  }

  h3 {
  font-size: 1.17em;
  margin-top: 10px;
  margin-bottom: 10px;
  }

  h4 {
  font-size: 1em;
  }

  h5 {
  font-size: 0.83em;
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


  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-']  {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb  {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'], 
  pre[class*='language-']  {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
