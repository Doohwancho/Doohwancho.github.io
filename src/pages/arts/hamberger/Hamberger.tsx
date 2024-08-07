import React from 'react';


//credit: https://codepen.io/thewizardjs/pen/WVEBLo

const BurgerComponent: React.FC = () => {
    return (
        <div style={{ height: 'calc(100vh - 40px)', margin: '20px', background: '#f2f2f2' }}>
            <h3 style={{ textAlign: 'center', fontFamily: 'Courier', fontWeight: 700 }}>
                Drag & Resize the window to watch the Burger Grow 😋
            </h3>
            <div className="burger" style={{
                position: 'relative',
                margin: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '200px'
            }}>
                <div className="bun top" style={{
                    height: '80px',
                    width: '180px',
                    borderRadius: '100px 100px 0 0',
                    background: '#f4a864'
                }}>
                    <div className="sesame-seed one" style={generateSeedStyles(-10, '10px', '30%')}></div>
                    <div className="sesame-seed two" style={generateSeedStyles(8, '20px', '45%')}></div>
                    <div className="sesame-seed three" style={generateSeedStyles(4, '10px', '60%')}></div>
                </div>
                <div className="cosmic-fill" style={{
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundImage: 'url(https://res.cloudinary.com/ddbxzcb7k/image/upload/v1564751401/fill-01_vgkaj7.svg)',
                    backgroundRepeat: 'round'
                }}></div>
                <div className="bun bottom" style={{
					position: 'relative',
					 // margin: '0 0 calc(100vh-120px) 0',
					 margin: '0 0 100px 0',
                    height: '80px',
                    width: '180px',
                    borderRadius: '0 0 100px 100px',
                    background: '#f4a864'
                }}></div>
            </div>
        </div>
    );
}

const generateSeedStyles = (rotation: number, top: string, left: string) => {
    return {
        position: 'absolute',
        background: '#ffe3ca',
        height: '8px',
        width: '20px',
        borderRadius: '100%',
        transform: `rotate(${rotation}deg)`,
        top: top,
        left: left
    };
}

export default BurgerComponent;
