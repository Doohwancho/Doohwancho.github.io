
# A. 이 프로젝트의 구조 

## a. content
1. project
    - github repo에 연동되어 있다.
2. ps
    - leetcode, baekjoon rating을 .md 파일로 나타낸다.
3. art
    - interactive design
4. thoughts
    - 내 생각, 요약한 것들을 정리한 .md 파일


## b. query .md files

1. /contents/*.md 파일을 graphql로 가져오는 것. 
2. thoughts탭에는 .md 파일 리스트를 query해서 줘야하고, ps탭에는 type:'ps'가 담긴 .md 파일을 찾아 줘야 함 
3. gatsby-node.js에서 graphql로 type:'ps'가 아닌 모든 .md 파일 긇어서 'src/templates/post_template.tsx'에 넘겨주면, 받은 데이터를 `<Template />`에 넣어서 표현함
4. gatsby-node.js에서 graphql로 type:'ps'인 ps_rating.md파일을 긁어서 'src/templates/ps_template.tsx'에 넘겨주면, `<div dangerouslySetInnerHTML={{ __html: content }} />`로 바로 렌더링함


## c. styles 
1. src/pages/reset_css.css 로 css reset
2. src/components/Common/GlobalStyle.tsx로 전반적인 css와 thoughts.md에 table of content의 css 적용
3. portfolio tab을 위한 css는 src/pages/portfolio/InternetPeriodicTable.css에서 제어
4. src/components/post/postContent.tsx 에서 .md 파일의 style 제어
5. 나머지 각 컴포넌트의 스타일들은 해당 컴포넌트 안에 내제되어있다. 


# B. for developers

## a. graphql로 .md files 확인하기 
```
npm i
npm start
http://localhost:8000/___graphql
```

## b. how to deploy?
```
npm run deploy
```
