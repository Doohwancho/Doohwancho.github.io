import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Sidebar from 'components/Navigation/Sidebar'
import InternetPeriodicTable from './InternetPeriodicTable'

const PageWrapper = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  margin-left: 150px;
  margin-top: 0px;
  padding: 0 0 0 0;
  border: 0;
  // margin: 0 0 0 0;
  width: calc(100% - 0px);
  height: 100vh;
  background: #202e38;
`

const TestPortfolioPage: React.FC = () => {
  return (
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <InternetPeriodicTable />
        {/* <Link to="/">Back to Home</Link> */}
      </ContentWrapper>
    </PageWrapper>
  )
}

export default TestPortfolioPage