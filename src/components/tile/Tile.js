import React from 'react'
import styles from './tile.module.scss'
import X from '../svg/x';
import O from '../svg/o';

const Tile = ({ handleBoard, tile }) => {
  const { id, sign, blocked, red } = tile;
  return (
    <div className={styles.container}
      onClick={() => handleBoard(id)}
    >
      {sign === 'X' && <X class={styles.svg_x} />}
      {sign === 'O' && <O class={styles.svg_o} />}
      {/* <p className={styles.sign}>{sign}</p> */}
    </div>
  )
}

export default Tile