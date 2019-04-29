import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import IconCard from "./components/IconCard";
import Score from "./components/Score";
import Icons from "./icons.json"
import "./components/IconCard.css";

const shuffleIcons = array => {
    let iconCount = array.length;
    while (iconCount > 0) {
        let index = Math.floor(Math.random()*iconCount);
        iconCount--;
        let newArray = array[iconCount];
        array[iconCount] = array[index];
        array[index] = newArray;
    }
    return array;
};

class App extends Component {

    state = {
        currentScore: 0,
        highScore: 0,
        result: "",
        clicked: [],
        Icons, 
        gameOver: false
    };

    componentDidMount(){
        this.setState({result: "Pick an item to start packing!"})
    };

    clickedIcon = (id) => {
        console.log(`Item id: ${id}`);
        if(!this.state.clicked.includes(id)){
            this.pointIncrease();
            this.state.clicked.push(id);
            this.setState({
                gameOver: false
            });
        } else {
            this.resetGame();
        };
    };

    pointIncrease = () => {
        let score = this.state.currentScore + 1;
        if (score === this.state.Icons.length) {
            this.setState({
                result: "You're finished packing! Time to get outside. Or click an icon to play again.",
                highScore: score,
                currentScore: 0,
                clicked: [],
                Icons,
                gameOver: false
            });
        } else if (score>this.state.highScore){
            this.setState({
                highScore: score,
                currentScore: score,
                result: "Awesome! You've got the new high score!"
            });
        } else {
            this.setState({
                currentScore: score,
                result: "Good thinking. Item packed."
            });
        }
        this.resetIconArray();
    };

    resetGame = () => {
        this.setState({
            points: 0, 
            currentScore: 0,
            highScore: this.state.highScore,
            result: "Your pack is too heavy! No way you'll make it in the wild.",
            clicked: [],
            Icons,
            gameOver: true
        });
        this.resetIconArray();
    };

    resetIconArray = () => {
        let newOrder = shuffleIcons(Icons);
        this.setState({Icons: newOrder});
    };

    render(){
        return (
            <div className="container">
                <Header />
                <Score highScore={this.state.highScore} currentScore={this.state.currentScore} status={this.state.result}/>
                <div className="iconCardStyle">
                {this.state.Icons.map(icon => (
                    <IconCard
                    id={icon.id}
                    image={icon.image}
                    clickedIcon={this.clickedIcon}
                    key={icon.id}
                    />
                    ))}
                </div>
            </div>
        )
    }
};

export default App;
