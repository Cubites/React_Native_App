# 작업 환경
* backend : node server, mongodb, mongoose
* front : view react-native
* admin : react web

## 넣을 데이터
* title, content, meta, tags, author, slug, thumbnail

* <code>timestamps: true</code> : 시간 자동 생성

## MongoDB
### Type
* string, number, date, buffer, boolean, mixed, array, objectId

## 사용 모듈
* morgan : Log를 확인할 때 사용
  * 개발 단계에서만 사용하는 모듈이므로 -D 를 붙여서 설치
* express-validator
* express-async-errors