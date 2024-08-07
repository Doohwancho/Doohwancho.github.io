import React, { FunctionComponent, useMemo } from 'react'
import './reset_css.css';
import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import {PostListItemType} from 'types/PostItem.types';

import Template from 'components/Common/Template';
import Sidebar from 'components/Navigation/Sidebar';
import Arts from 'components/Main/Arts';
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';



type IndexPageProps = {
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
}) {

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '150px', width: 'calc(100% - 150px)' }}>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default IndexPage
