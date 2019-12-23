import React from 'react';
import './Wizard.css'

class Wizard extends React.Component{
    render(){
        return(
            <div className="avatar">
                <img src='./wizard.png' alt="wizbiz"/>
                <div className="playerName">
                    {this.props.name}
                </div>
                <div className="moveHistory">
                    <pre className="hand">
                        {this.props.leftHistory}
                    </pre>
                    <pre className="hand">
                        {this.props.rightHistory}
                    </pre>
                </div>
            </div>
        )
    }

    
}

export default Wizard;