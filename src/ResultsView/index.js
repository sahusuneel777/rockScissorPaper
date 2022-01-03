import {Component} from 'react'
import './index.css'

class ResultsView extends Component {
  render() {
    const {
      endResult,
      randomChoiceImage,
      playAgain,
      activeChoiceImage,
    } = this.props

    const onClickPlayAgain = () => {
      playAgain()
    }

    const [activeChoicess] = activeChoiceImage
    return (
      <div className="results-view-container">
        <div className="users-card-container">
          <div className="user-card">
            <p className="user">YOU</p>
            <img
              src={activeChoicess.imageUrl}
              className="result-image"
              alt={activeChoicess.id}
            />
          </div>
          <div className="user-card">
            <p className="user">OPPONENT</p>
            <img
              src={randomChoiceImage.imageUrl}
              className="result-image"
              alt={randomChoiceImage.id}
            />
          </div>
        </div>
        <p>{`YOU ${endResult}`}</p>
        <button className="custom-btn" onClick={onClickPlayAgain} type="button">
          Play Again
        </button>
      </div>
    )
  }
}

export default ResultsView
