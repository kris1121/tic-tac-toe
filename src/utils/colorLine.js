import { checkWin } from "./checkWin"
import { finishGame } from "./finishGame";

export const colorLine = (board, cb) => {
    const win = checkWin(board);

    if (win) {
        for (let i = 0; i < 3; i++) {
            let index = win[i]
            board.splice(index, 1, {...board[index], red: true })
        }
        cb(board);
        finishGame(board, cb)
    }

}