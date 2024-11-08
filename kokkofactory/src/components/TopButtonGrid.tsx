import * as React from 'react';
import Button from './Button';

const buttonLabels = [{label: '集卵 count', path: '/count'}, {label: 'サイズ size', path: '/size'}, {label: '鶏 chicken', path: '/chicken'}];

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
                    <Button label={label.label} path={label.path} />
                </div>
            ))}
        </div>
    );
};

export default TopButtonGrid;
