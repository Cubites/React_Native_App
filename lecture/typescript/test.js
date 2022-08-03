function add(num1, num2){
    console.log(num1 + num2);
}

add(); // NaN
add(1); // NaN
add(1, 2); // 3
add(1, 2, 3); // 3
add(1, 'num'); // 1num
add('num1', 'num2'); //num1num2

function loopItems(arr){
    arr.forEach((item) => {
        console.log(item);
    });
}

loopItems([1, 2, 3, 4, 5]);
loopItems(1, 2, 3, 4, 5);