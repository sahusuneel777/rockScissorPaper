import {Component} from 'react'
import './App.css'
import RockPaperScissor from './RockPaperScissor'
import ResultsView from './ResultsView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    activeChoice: 'ROCK',
    scoreValue: 0,
    showResults: false,
    endResult: 'Won',
  }

  playAgain = () => {
    this.setState({showResults: false})
  }

  clickChoice = choice => {
    const random = Math.floor(Math.random() * choicesList.length)
    console.log(choice)

    this.setState({
      activeChoice: choice,
      randomChoice: random,
      showResults: true,
    })

    const randomChoiceImage = choicesList[random]

    let result

    switch (choice) {
      case 'ROCK':
        if (randomChoiceImage.id === 'SCISSORS') {
          result = 'WON'
          this.setState(prevState => ({scoreValue: prevState.scoreValue + 1}))
        } else if (randomChoiceImage.id === 'ROCK') {
          result = 'DRAW'
          this.setState(prevState => ({scoreValue: prevState.scoreValue}))
        } else {
          result = 'LOSS'
          this.setState(prevState => ({scoreValue: prevState.scoreValue - 1}))
        }
        break
      case 'SCISSORS':
        if (randomChoiceImage.id === 'SCISSORS') {
          result = 'DRAW'
          this.setState(prevState => ({scoreValue: prevState.scoreValue}))
        } else if (randomChoiceImage.id === 'ROCK') {
          result = 'LOSS'
          this.setState(prevState => ({scoreValue: prevState.scoreValue - 1}))
        } else {
          result = 'WON'
          this.setState(prevState => ({scoreValue: prevState.scoreValue + 1}))
        }
        break
      case 'PAPER':
        if (randomChoiceImage.id === 'SCISSORS') {
          result = 'LOSS'
          this.setState(prevState => ({scoreValue: prevState.scoreValue - 1}))
        } else if (randomChoiceImage.id === 'ROCK') {
          result = 'WON'
          this.setState(prevState => ({scoreValue: prevState.scoreValue + 1}))
        } else {
          result = 'DRAW'
          this.setState(prevState => ({scoreValue: prevState.scoreValue}))
        }
        break

      default:
        break
    }
    this.setState({endResult: result})
  }

  render() {
    const {
      scoreValue,
      activeChoice,
      endResult,
      showResults,
      randomChoice,
    } = this.state
    // console.log('Score', scoreValue)
    // console.log(`activeChoice`, activeChoice)
    const activeChoiceImage = choicesList.filter(
      eachChoice => eachChoice.id === activeChoice,
    )
    const randomChoiceImage = choicesList[randomChoice]

    // console.log(`randomChoiceImage`, randomChoiceImage)
    // console.log(`activeChoiceImage`, activeChoiceImage)

    return (
      <div className="app-container">
        <div className="scorecard-container">
          <div className="choices-container">
            <p className="things">ROCK</p>
            <p className="things">PAPER</p>
            <p className="things">SCISSOR</p>
          </div>

          <div className="score-board">
            <p className="score-value">Score</p>
            <p className="score-value">{scoreValue}</p>
          </div>
        </div>

        {showResults ? (
          <ResultsView
            activeChoice={activeChoice}
            endResult={endResult}
            activeChoiceImage={activeChoiceImage}
            randomChoiceImage={randomChoiceImage}
            playAgain={this.playAgain}
          />
        ) : (
          <RockPaperScissor
            choices={choicesList}
            clickChoice={this.clickChoice}
          />
        )}
      </div>
    )
  }
}

export default App
