// Question one
function sadeeOne (num) {
if (num % 2 === 0){
    return `${num} The number is Even`;
}
else{
    return `${num} The number is Odd`; 
}
}
console.log (sadeeOne (6));

// Question two
function sadeeTwo (n1, n2) {
    for(let n = n1; n<=n2; n++) {
        console.log(n);
    }
}
    sadeeTwo (4, 20);

// Question three
function sadeeThree (start, end) {
    let sum = 0;  
    for (let i = start; i <= end; i++) {
        sum += i;
       }
    return sum;
}
 let result = sadeeThree (1, 15);
 console.log (result)