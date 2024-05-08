function addCommas(num) {
    let stringNum = num.toString();
    stringNum = stringNum.split('');
    if (stringNum.length > 3) {
    stringNum.splice(-3, 0, ",")};
    if (stringNum.length > 6) {
        stringNum.splice(-7, 0, ",");
    }
    if (stringNum.length > 9) {
        stringNum.splice(-11, 0, ",");
    }
    if (stringNum.length > 12) {
        stringNum.splice(-15, 0, ",");
    }
    
    

    newNum = stringNum.join('');
    return newNum
}

module.exports = addCommas;