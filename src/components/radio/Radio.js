import React from 'react'

import styles from './radio.module.scss';

const Radio = ({ currentSign, setCurrentSign, blockSign }) => {
    return (
        <div>
            <input type="radio" value="X" name="sign"
                checked={currentSign === 'X'}
                onChange={(e) => setCurrentSign(e.target.value)}
                disabled={blockSign} /> X
          <input type="radio" value="O" name="Sign"
                checked={currentSign === 'O'}
                onChange={(e) => setCurrentSign(e.target.value)}
                disabled={blockSign} /> O
    </div>
  )
}

export default Radio