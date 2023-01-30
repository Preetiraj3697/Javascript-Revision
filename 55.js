// function returing funtion

function myFunc(){
    function hello(){
        return 'hello world';
    }
    return hello;
}
const ans = myFunc();
console.log(ans()); // hello world