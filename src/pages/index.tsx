import React, { FunctionComponent, useMemo } from 'react'
import './reset_css.css';
import Sidebar from 'components/Navigation/Sidebar';



type IndexPageProps = {
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
}) {

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '150px', width: 'calc(100% - 150px)' }}>
        <h1>hello world!</h1>
      </div>
    </div>
  )
}

export default IndexPage
