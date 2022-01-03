import {Component} from 'react'
import {
  ChoicesContainer,
  ChoicesDivision,
  ChoiceButton,
  ChoiceImage,
} from './styledComponents'
import Rules from '../Rules'

class RockPaperScissor extends Component {
  onClickChoice = event => {
    const {clickChoice} = this.props
    clickChoice(event.target.alt)
  }

  render() {
    const {choices} = this.props

    return (
      <ChoicesContainer>
        <ChoicesDivision>
          {choices.map(eachChoice => (
            <ChoiceButton onClick={this.onClickChoice} key={eachChoice.id}>
              <ChoiceImage src={eachChoice.imageUrl} alt={eachChoice.id} />
            </ChoiceButton>
          ))}
        </ChoicesDivision>
        <Rules />
      </ChoicesContainer>
    )
  }
}

export default RockPaperScissor
