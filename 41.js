// object destructuring
const band = {
    bandName : 'led zepplin',
    famousSong : 'stairway to heaven',
};
// const bandName = band.bandName;
// console.log('bandName: ', bandName); //bandName:  led zepplin
// const famousSong = band.famousSong; //famousSong:  stairway to heaven
// console.log('famousSong: ', famousSong);

const {bandName, famousSong} = band;
console.log('famousSong: ', famousSong); // famousSong:  stairway to heaven
console.log('bandName: ', bandName);  // bandName:  led zepplin
