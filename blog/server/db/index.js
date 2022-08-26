const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// const connect = () => {
//     if(process.env.NODE_ENV !== 'production'){
//         mongoose.set('debug', true);
//     }
// }

// mongoose.connect(process.env.MONGO_URL, (err) => {
//     if(err){
//         console.error('DB연결 에러', err);
//     }else{
//         console.log('DB연결 성공');
//     }
// })
// mongoose.connection.on('error', (err) => {
//     console.log('연결 에러');
// });
// mongoose.connection.on('disconnect', (err) => {
//     console.log('연결이 종료되어 재접속 시도');
//     connect();
// })

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB연결 성공 (/db/index.js)');
    })
    .catch((err) => {
        console.log('DB연결 에러 : ', err);
    });