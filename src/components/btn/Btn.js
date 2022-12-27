import React from 'react'

import style from './btn.module.scss'

const Btn = ({ clear }) => {
  return (
      <button
          className={style.btn_new_game}
          onClick={clear}
      >Nowa gra</button>
  )
}

export default Btn