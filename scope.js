// var, let, const

var a;
let b;
// const c;        // error

console.log(typeof(b));



var a = 1;
// let b = 2;
const c = 3;        // declare, init



var a = 1;
// let b = 2;       // redeclare, init
// const c = 3; 



a = 1;              // reinit
b = 2;
// c = 3;






console.log(x);                   // undefined
console.log(typeof(x));           // undefined

var x = 123;







// var 

var u = 1;

{
    var u = 2;
    
}

console.log(u);

{
    console.log(u,"run");          

    var u = 3;                   
}

console.log(u);                  


{
    // console.log(u,"run");               // error

    let u = 4;                    // no changes
}

console.log(u);                  // no changes


var u = 5;

console.log(u,"\n\n");








// let 


let v = 5;


{
    let v = 6;

}

console.log(v,"\n\n");


// {

//     var v = 7;                          // error 

// }



// let v = 7;                               // error










// const



const i = 1;

{
    const i = 2;
}

console.log(i);


// const i = 3;              // error


// {
//     var i = 4;            // error
// }








