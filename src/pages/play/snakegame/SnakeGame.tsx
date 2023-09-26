import React, { useState, useEffect, useCallback } from 'react';

// Define types
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Cell = { x: number; y: number };

const gridSize = 10;

const SnakeGame: React.FC = () => {
    const [snake, setSnake] = useState<Cell[]>([{ x: 1, y: 2 }]);
    const [direction, setDirection] = useState<Direction>('RIGHT');
    const [food, setFood] = useState<Cell>({ x: 5, y: 5 });

    // Handle arrow key presses
    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp': setDirection('UP'); break;
                case 'ArrowDown': setDirection('DOWN'); break;
                case 'ArrowLeft': setDirection('LEFT'); break;
                case 'ArrowRight': setDirection('RIGHT'); break;
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, []);

    useEffect(() => {
        const gameInterval = setInterval(() => {
            let newSnake = snake.map(cell => ({ ...cell }));

            let head = Object.assign({}, newSnake[0]);


			//1. 방향키를 누른 방향으로 1칸 이동한다.
			//2. 벽에 충돌하면 시계방향으로 자동 회전한다.
			//3. 내 꼬리에 닿으면 게임 종료
            switch (direction) {
                case 'UP':
					if(newSnake.some(e => e.x == head.x && e.y == head.y-1)) {
						alert("game ended!");
						clearInterval(gameInterval);
						return;
					}

					if(head.y - 1 < 0) {
						head.x += 1;
						setDirection('RIGHT');
					} else {
						head.y -= 1;
					}
					break;
                case 'DOWN':
					if(newSnake.some(e => e.x == head.x && e.y == head.y+1)) {
						alert("game ended!");
						clearInterval(gameInterval);
						return;
					}
					if(head.y + 1 >= gridSize) {
						head.x -= 1;
						setDirection('LEFT');
					} else {
						head.y += 1;
					}
					break;
                case 'LEFT':
					if(newSnake.some(e => e.x == head.x - 1 && e.y == head.y)) {
						alert("game ended!");
						clearInterval(gameInterval);
						return;
					}
					if(head.x - 1 < 0) {
						head.y -= 1;
						setDirection('UP');
					} else {
						head.x -= 1;
					}
					break;
                case 'RIGHT':
					if(newSnake.some(e => e.x == head.x + 1 && e.y == head.y)) {
						alert("game ended!");
						clearInterval(gameInterval);
						return;
					}
					if(head.x + 1 >= gridSize) {
						head.y += 1;
						setDirection('DOWN');
					} else {
						head.x += 1;
					}
					break;
            }


			//food를 먹었다면
			if(head.x == food.x && head.y == food.y) {
				newSnake = [head, ...newSnake.slice(0)];

				//다음 food의 위치의 조건  1. grid size 안  2. snake의 위치가 아닌 곳  3. 랜덤
				let newFoodX = Math.floor(Math.random() * gridSize);
				let newFoodY = Math.floor(Math.random() * gridSize);

				while(newSnake.some(e => e.x == newFoodX && e.y == newFoodY)) {
					newFoodX = Math.floor(Math.random() * gridSize);
					newFoodY = Math.floor(Math.random() * gridSize);
				}

				setFood({x:newFoodX, y:newFoodY});
			}

            newSnake = [head, ...newSnake.slice(0, -1)]; //새로 움직인 head + 기존 array 병합

            setSnake(newSnake);
        }, 100);

        return () => clearInterval(gameInterval);
    }, [snake, direction]);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 20px)` }}>
            {Array.from({ length: gridSize * gridSize }).map((_, index) => {
                const x = index % gridSize;
                const y = Math.floor(index / gridSize);

				const isSnake = snake.some(cell => cell.x === x && cell.y === y);
                const isFood = food.x === x && food.y === y;

                return (
                    <div
                        key={index}
                        style={{
                            width: '20px',
                            height: '20px',
                            border: '1px solid gray',
                            backgroundColor: isSnake ? 'green' : isFood ? 'red' : 'white'
                        }}
                    />
                );
            })}
        </div>
    );
};

export default SnakeGame;

