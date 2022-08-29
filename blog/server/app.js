const express = require('express');
const morgan = require('morgan');
require('express-async-errors');

// 라우터 호출
const postRouter = require('./routers/post');

const app = express();

app.set('port', 4001);
require('dotenv').config();
require('./db');
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// post 추가
app.post('/api/post', postRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
})

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 서버 실행 중...`);
});