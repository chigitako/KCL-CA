import * as React from 'react';
import Button from './Button';

const buttonLabels = [
    {label: '集卵 count', path: '/count', illustrationSrc: '/images/count-egg.jpg'}, 
    {label: 'サイズ size', path: '/size', illustrationSrc: '/images/size-egg.jpg'}, 
    {label: '鶏 chicken', path: '/chicken', illustrationSrc: '/images/chicken.jpg'}];

const TopButtonGrid: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
            padding: '0 40px'}}>
            {buttonLabels.map((label, index) => (
                <div
                key={index}
                style={{ margin: '10px'}}>
                    <Button 
                    label={label.label} 
                    path={label.path} 
                    illustrationSrc={label.illustrationSrc}/>
                </div>
            ))}
        </div>
    );
};

export default TopButtonGrid;
