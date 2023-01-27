// lexical scope
const myVar = 'value1';
function myApp(){
    
    function myFunc(){
        // const myVar = 'value59';
        
        const myFunc2=()=>{
            console.log('inside myFunc2',myVar);
        };
       myFunc2();
    };

    console.log(myVar);
    myFunc()
}

myApp()

// 49.js.14 value1
// 49.js:9 inside myFunc2 value1
