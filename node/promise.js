// function double(number, callback){
//     setTimeout(() => {
//         if(!callback) return;
//         const result = number * 2;
//         console.log(`${number} * 2 = ${result}`);
//         callback(number * 2);
//     }, 1000);
// }

// double(1, result => {
//     double(result, result => {
//         double(result, result => {
//             double(result, result => {
//                 double(result, result => {
//                     console.log('최종 결과는 ' + result + '입니다.');
//                 });                
//             }); 
//         });
//     });
// });

function double(number){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof number != 'number'){
                reject(new Error('number는 숫자여야 합니다.'));
                return;
            }
            const result = number * 2;
            console.log(`${number} * 2 = ${result}`);
            resolve(result);
        }, 1000);
    });
    return promise;
}

/*
    process 함수를 선언할 때, 앞에 async를 붙여주면 해당 함수를 호출했을 때 내부에서 반환한 값을 이행하는 Promise를 반환함
    하지만 process()에서 반환하는 값이 Promise이기 때문에 여기에 다시 then을 사용
    PS: 화살표 함수인 경우 const process async () => { ... } 이런 방식 사용
    PS2: async, await 에서 요류에 대해 예외 처리를 하려면 try/catch 구문을 사용해야 함
*/
async function process(){
    let result = 1;
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    result = await double(result);
    return result;
}

process().then(result => {
    console.log(`최종 결과는 ${result}`);
})

// double(1)
// .then(result => double(result))
// .then(result => double(result))
// .then(result => double(result))
// .then(result => double(result))
// .then(result => double(result))
// .then(result => double(result))
// .then(result => console.log('최종 결과는 ' + result))
// .catch(err => console.log(err));

// function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function process(){
//     console.log('안녕하세요!!');
//     await sleep(1000); // 1초 쉬기
//     console.log('반갑습니다.');
// }

// process();