// object destructuring
const band = {
    bandName : 'led zepplin',
    famousSong : 'stairway to heaven',
    year: 1986,
    anotherFamousSong: 'kashmir',
};
// const bandName = band.bandName;
// console.log('bandName: ', bandName); //bandName:  led zepplin
// const famousSong = band.famousSong; //famousSong:  stairway to heaven
// console.log('famousSong: ', famousSong);

// const {bandName, famousSong} = band;
// console.log('famousSong: ', famousSong); // famousSong:  stairway to heaven
// console.log('bandName: ', bandName);  // bandName:  led zepplin


// const {bandName:var1, famousSong} = band;
// console.log('famousSong: ', famousSong); // famousSong:  stairway to heaven
// console.log('bandName: ', var1);  // bandName


const {bandName, famousSong, ...restProps} = band;
console.log('restProps: ', restProps); // restProps:  {year: 1986, anotherFamousSong: 'kashmir'}

