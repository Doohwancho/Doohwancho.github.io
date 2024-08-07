import React, { FunctionComponent, useMemo } from 'react'

import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import {PostListItemType} from 'types/PostItem.types';

import Template from 'components/Common/Template';
import Sidebar from 'components/Navigation/Sidebar';
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';

type PostListProps= {
  location: {
    search: string
  },
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    },
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const PostListPage:FunctionComponent<PostListProps>  = function ({
    location: { search },
    data: {
        site: {
          siteMetadata: { title, description, siteUrl },
        },
        allMarkdownRemark: { edges },
        file: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
    }
}) {
    const parsed: ParsedQuery<string> = queryString.parse(search)
    const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

      const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  )
    return (

    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '150px', width: 'calc(100% - 150px)' }}>
        <Template
          title={title}
          description={description}
          url={siteUrl}
          image={publicURL}
        >
          {/* <Arts profileImage={gatsbyImageData} /> */}
          <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
          <PostList selectedCategory={selectedCategory} posts={edges} />
        </Template>
      </div>
    </div>
    )
}

export default PostListPage


export const getPostList = graphql`
query getPostList {
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    filter: { frontmatter: { type: { ne: "ps" } } }
  ) {
    edges {
      node {
        id
        fields {
          slug,
        }
        frontmatter {
          title
          summary
          date(formatString: "YYYY.MM.DD.")
          categories
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 768, height: 400)
            }
          }
        }
      }
    }
  }
  file(name: { eq: "profile-image" }) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120)
    }
    publicURL
  }
}
  `