const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routers/post');

const app = express();

app.set('port', 4000);
require('dotenv').config();
require('./db');
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/api/post/create', postRouter);

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 서버 실행 중...`)
});