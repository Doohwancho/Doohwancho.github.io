import React from 'react'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import Sidebar from 'components/Navigation/Sidebar'

const PsTemplate = ({ pageContext}) => {
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  const { content } = pageContext

  return (
    
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ marginLeft: '150px', width: 'calc(100% - 150px)' }}>
        <Template
            title="PS Page"
            description="PS Page Description"
            url="/ps"
            image=""
            >
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Template>
    </div>
    </div>
  )
}

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         description
//       }
//     }
//   }
// `

export default PsTemplate