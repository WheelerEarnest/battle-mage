 import React from 'react';
 import './Game.css';
 import Wizard from './Wizard'

 class Game extends React.Component{
    // Todo: make a function that takes in a hand history and properly formats it
    constructor(props){
        super(props);
        let wiz1 = {
            name: "Bill",
            leftHist: ['f', 'w', 'd'],
            rightHist: ['f', 'w', 'd']
        };
        let wiz2 = {
            name: "Fan",
            leftHist: ['f', 'w', 'd'],
            rightHist: ['f', 'w', 'd']
        };
        let wiz3 = {
            name: "Joe",
            leftHist: ['f', 'w', 'd'],
            rightHist: ['f', 'w', 'd']
        };
        this.wizards = [wiz1, wiz2, wiz3];
    }

    getWizards(){
        const wiz = this.wizards.map((wizard) => 
            <Wizard name={wizard.name} leftHistory={wizard.leftHist} rightHistory={wizard.rightHist} />
        );
        return wiz;
    }
    render(){
        return(
            <div className="Game">
                <div className="actionPanel">
                    <div className="gesturePanel">
                        <select>
                            <option>F</option>
                            <option>P</option>
                            <option>S</option>
                            <option>W</option>
                            <option>D</option>
                            <option>C</option>
                            <option>></option>
                            <option> </option>
                        </select>
                        <select>
                            <option>F</option>
                            <option>P</option>
                            <option>S</option>
                            <option>W</option>
                            <option>D</option>
                            <option>C</option>
                            <option>></option>
                            <option> </option>
                        </select>
                    </div>

                    <select>
                        <option>spell1</option>
                        <option>2</option>
                    </select>

                </div>
                <div>
                    <div className="gamePanel">
                        {this.getWizards()}                          
                    </div>
                </div>
             
                
            </div>
        )
    }
 }

 export default Game;