// InternetPeriodicTable.js
import React from 'react';
import './InternetPeriodicTable.css'; // Create this CSS file and move all the styles there

//reference: https://codepen.io/oliviale/pen/ZmvPPd 


const elements = [
  { symbol: 'Na', name: 'NandTo Tetris', category: 'computer-science', description: "build computer from scratch", link:"https://github.com/Doohwancho/computer-science/tree/main/02.computer-architecture/Nand2Tetris"},
  { symbol: 'Pi', name: 'Pintos', category: 'yet', description: "explore operating system in c", link:"https://github.com/Doohwancho/computer-science/tree/main/03.os/pintos"},
  { symbol: 'Co', name: 'Compiler FromScratch', category: 'computer-science', description: "write compiler from scratch in c++", link:"https://github.com/Doohwancho/computer-science/tree/main/05.compiler/crafting_compiler"},
  { symbol: 'So', name: 'Socket Programming', category: 'yet', description: "chatting app using socket", link:"#"},
  { symbol: 'Db', name: 'Database FromScratch', category: 'yet', description: "write relational DB from scratch", link:"#" },
  { symbol: 'As', name: 'Assembly', category: 'yet', description: "assembly performance optimization", link:"#"},
  { symbol: '1b', name: '1brc', category: 'computer-science', description: "1 billion row challenge", link:"https://github.com/Doohwancho/spring/tree/main/01.java"},
  { symbol: 'Ec', name: 'Ecommerce', category: 'webapp', description: "scalable ecommerce (10,000 RPS)", link:"https://github.com/Doohwancho/ecommerce"},
  { symbol: 'Aw', name: 'Ads Webapp', category: 'yet', description: "전장 홈페이지 w/ 광고", link:"#"},
  { symbol: 'Mw', name: 'Ml+Webapp', category: 'yet', description: "webapp + ml", link:"#" },
  { symbol: 'Ts', name: 'Trend Search', category: 'selfmade-tool', description: "trend words crawler", link: "https://github.com/Doohwancho/TrendSearch"},
  { symbol: 'Ft', name: 'Floating Timer', category: 'selfmade-tool', description: "floating timer", link: "https://github.com/Doohwancho/floating_timer"},
  { symbol: 'Rl', name: 'Rock Lee', category: 'selfmade-tool', description: "github commit visualizer", link: "https://github.com/Doohwancho/RockLee"},
//   { symbol: 'Ml', name: 'machine learning', category: 'machine-learning', description: "just fun stuff" },
];

const InternetPeriodicTable = () => {
  return (
    <div className="portfolio">
      <h1>My Programming Periodic Table</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="periodic-table">
        <div className="empty-spacer-1"></div>
        <div className="empty-spacer-2"></div>
        {elements.map((element) => (
          <a
            key={element.symbol}
            href={element.link}
            className={`periodic-element ${element.category}`}
            data-description={element.description}
          >
            <div className="periodic-element-inner">
              <div className="title">{element.symbol}</div>
              <div className="description">{element.name}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="legend-table">
        {/* Add legend items here */}
        <div className="legend-table__wrapper">
            <span className="legend-table__marker computer-science"></span>
            <span className="legend-table__text">Computer Science</span>
            <span className="legend-table__marker webapp"></span>
            <span className="legend-table__text">Web App</span>
            {/* <span className="legend-table__marker machine-learning"></span>
            <span className="legend-table__text">Machine Learning</span> */}
            <span className="legend-table__marker selfmade-tool"></span>
            <span className="legend-table__text">Selfmade Tools</span>
        </div>
      </div>
    </div>
  );
};

export default InternetPeriodicTable;