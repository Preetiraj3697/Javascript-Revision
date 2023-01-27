// lexical scope

function myApp(){
    const myVar = 'value1';
    function myFunc(){
        // const myVar = 'value59';
        console.log('inside myFunc',myVar)
    };
    const myFunc2=function(){};
    const myFunc3 = () => {};
    console.log(myVar);
    myFunc()
}

myApp()