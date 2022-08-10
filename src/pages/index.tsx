import React, { FunctionComponent, useMemo } from 'react'
import styled from '@Emotion/styled'
import Template from 'components/Common/Template'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';
import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'
import {PostListItemType} from 'src/types/PostItem.types';



const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vh;
`;

type IndexPageProps = {
  location: {
    search: string
  },
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    },
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
    location: { search },
    data: {
        allMarkdownRemark: { edges },
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
        <Template>
            <Introduction />
            <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
            <PostList selectedCategory={selectedCategory} posts={edges} />
        </Template>
 );
};

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
  `
