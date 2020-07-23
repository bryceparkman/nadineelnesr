import React from 'react';

export default function withOverlay(Component, text) {
    return class extends React.Component {
        render() {
            return (
                <div className="hoverOverlay">
                    <div className="hoverImg">
                        <Component/>
                    </div>
                    <div className="hoverText">
                        {text}
                    </div>
                </div>
            )
        }
    }
}