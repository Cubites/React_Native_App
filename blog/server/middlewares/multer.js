const multer = require('multer');
// const uploads = multer({dest: 'uploads/'});

// 아래의 두가지 옵션 가능
// destination (어느 폴더에 업로드 한 파일을 저장할 지 경정)
// filename(파일명을 결정하는 옵션)
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}__${file.originalname}`);
    }
});

// 이미지 파일 검증
const fileFilter = (req, file, cb) => {
    // 이미지 파일이 맞는지 검증
    if(!file.mimetype.includes('image')){
        return cb('error: 이미지 파일만 허용합니다.', false);
    }
    cb(null, true);
}

module.exports = multer({ storage, fileFilter });