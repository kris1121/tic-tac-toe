export const finishGame = (board, cb) => {
    const blocked = board.map(el => {
        return {
            ...el,
            blocked: true
        }
    })
    console.log('blocked')
    cb(blocked);
}