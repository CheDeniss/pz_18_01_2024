import React from 'react';
import LoadingIcon from '../assets/icons8-spinner.gif';

const Loading = () => {
    return (
        <div>
            <h2>Завантаження...</h2>
            <img src={LoadingIcon} alt="Loading icon" />
        </div>
    );
};

export default Loading;
