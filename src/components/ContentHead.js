import React from 'react';
import './ContentHead.css';

const ContentHead = () => {
    return (
        <div className="sitting-room-layout">
            <div className="breadcrumb">
                <button>Products</button>
            </div>
            <div className="header">
                <h1>Fashion Store</h1>
            </div>
            <div className="view-toggle">
                <div className="view-buttons">
                    <span>View</span>
                    <button className="view-button grid-2">
                        <div className="rect"></div>
                        <div className="rect"></div>
                    </button>
                    <button className="view-button grid-3 active">
                        <div className="rect"></div>
                        <div className="rect"></div>
                        <div className="rect"></div>
                    </button>
                </div>
                <p>A collection of furniture for the living room that is ready to beautify and enhance the atmosphere in your living room.</p>
            </div>
        </div>
    );
};

export default ContentHead;