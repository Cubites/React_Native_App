const { check, validationResult } = require('express-validator');

exports.postValidator = [
    check('title').trim().not().isEmpty().withMessage('제목을 입력하는데 에러가 발생했습니다.'), // 빈값이 있으면 안됨
    check('content').trim().not().isEmpty().withMessage('내용을 입력하는데 에러가 발생했습니다.'),
    check('meta').trim().not().isEmpty().withMessage('메타태그를 입력하는데 에러가 발생했습니다.'),
    check('tags').isArray().withMessage('Tags must be array of strings!').custom((tags) => {
        for(let t of tags){
            if(typeof t !== 'string'){
                throw Error('태그타입이 아닙니다. 태그는 문자열이어야 합니다.');
            }
        }
        return true;
    }),
    check('slug').trim().not().isEmpty().withMessage('슬러그를 입력하는데 에러가 발생했습니다.')
];

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if(error.lengh){
        return res.status(401).json({error: error[0].msg});
    }
    next();
}