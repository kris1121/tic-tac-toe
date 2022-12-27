import React, { useEffect, useState } from 'react'

import Tile from '../tile/Tile'
import Btn from '../btn/btn'
import Radio from '../radio/Radio'
import { checkWin } from '../../utils/checkWin'
import { colorLine } from '../../utils/colorLine'
import styles from './board.module.scss'

const Board = () => {

  const initialState = [
    { id: 0, sign: '', blocked: false }, { id: 1, sign: '', blocked: false },
    { id: 2, sign: '', blocked: false }, { id: 3, sign: '', blocked: false },
    { id: 4, sign: '', blocked: false }, { id: 5, sign: '', blocked: false },
    { id: 6, sign: '', blocked: false }, { id: 7, sign: '', blocked: false },
    { id: 8, sign: '', blocked: false}
  ]
  const [currentSign, setCurrentSign] = useState('X');
  const [board, setBoard] = useState(initialState);
  const [blockSign, setBlockSign] = useState(false);

  useEffect(() => {

  }, [board])

  const changeSign = () => {

    setCurrentSign(current => {
      if (current === "X") {
        return "O"
      } else {
        return "X"
      }
    })
    setBlockSign(true);
  }

  const handleBoard = (id) => {

    if (!board[id].blocked) {
      
      board.splice(id, 1, { id: id, sign: currentSign, blocked: true })
      
      changeSign();
      colorLine(board, setBoard);
    }
  }

  const clearBoard = () => {
    console.log("clear")
    setBoard(initialState);
    setBlockSign(false);
  }

  return (
    <>
      <Radio currentSign={currentSign} setCurrentSign={setCurrentSign}
        blockSign={blockSign} />
      <Btn clear={clearBoard} />
      <div className={styles.container}>
        {board.map((tile, index) => {
          return (
            <Tile key={index}
            handleBoard={handleBoard}
            tile={tile}
                />)
        })}
      </div>
    </>
  )
}

export default Board