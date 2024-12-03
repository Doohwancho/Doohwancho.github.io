import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'


const SidebarWrapper = styled.nav`
  width: 150px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f4f4f4;
  // padding: 20px;
  padding: 0;
  margin: 0;
`

const NavSection = styled.div`
  margin-bottom: 20px;
`

const NavHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`

const NavLink = styled(Link)`
  font-size: 18px;
  margin-bottom: 10px;

  display: block;
  margin-bottom: 5px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Sidebar: React.FC = () => {
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark

  return (
    <SidebarWrapper>
      <NavSection>
        <NavLink to="/portfolio/portfolio">Project</NavLink>
      </NavSection>
      <NavSection>
        <NavLink to="/interactive_design/play">Interactive Design</NavLink>
      </NavSection>
      <NavSection>
        <NavLink to="/physics/physics">Physics</NavLink>
      </NavSection>
      <NavSection>
        <NavLink to="/ps">PS</NavLink>
      </NavSection>
      <NavSection>
        <NavLink to="/post/posts">Post</NavLink>
      </NavSection>
    </SidebarWrapper>
  )
}

export default Sidebar