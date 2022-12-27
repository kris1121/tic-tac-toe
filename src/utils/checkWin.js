export const checkWin = (array) => {
    //poziome linie
    if (array[0]?.sign === array[1]?.sign && array[1]?.sign === array[2]?.sign && array[0]?.sign !== "") {
        return [0,1,2]
    }
    if (array[3]?.sign === array[4]?.sign && array[4]?.sign === array[5]?.sign && array[3]?.sign !== "") {
        return [3,4,5]
    }
    if (array[6]?.sign === array[7]?.sign && array[7]?.sign === array[8]?.sign && array[6]?.sign !== "") {
        return [6,7,8]
    }
    //pionowe linie
    if (array[0]?.sign === array[3]?.sign && array[3]?.sign === array[6]?.sign && array[0]?.sign !== "") {
        return [0,3,6]
    }
    if (array[1]?.sign === array[4]?.sign && array[4]?.sign === array[7]?.sign && array[1]?.sign !== "") {
        return [1,4,7]
    }
    if (array[2]?.sign === array[5]?.sign && array[5]?.sign === array[8]?.sign && array[2]?.sign !== "") {
        return [2,5,8]
    }
    //przekatne
    if (array[0]?.sign === array[4]?.sign && array[4]?.sign === array[8]?.sign && array[0]?.sign !== "") {
        return [0,4,8]
    }
    if (array[2]?.sign === array[4]?.sign && array[4]?.sign === array[6]?.sign && array[2]?.sign !== "") {
        return [2,4,6]
    }
}