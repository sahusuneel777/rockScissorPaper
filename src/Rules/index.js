import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

const Rules = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-container">
            <button className="close-btn" type="button" onClick={() => close()}>
              <RiCloseLine />
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="pop-image"
            />
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default Rules
