# TypeScript
### 셋팅
  1. <code>npm init -y</code>로 package.json 파일 생성
  2. Typescipt 설치
  <br>> <code>npm install -g typescript</code> or <code>yarn global add typescript</code>
  3. tsconfig.json 생성 : <code>npx tsc --init</code>

### tsconfig.json 수정
* 다음 코드만 남김
  <pre>
  {
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "esModuleInterop": true,
        "strict": true,
    }
  }
  </pre>
  * <code>"target": "es2016"</code> > <code>"target": "es6"</code>
    * 컴파일된 js 코드가 javascript version es6임을 의미
  * module : 컴파일된 코드가 어떤 모듈 시스템을 사용할 지 정의 (commonjs)
  * strict : 모든 타입 체킹 옵션을 활성화 (true)
  * esModuleInterop: commonjs 모듈 형태로 이루어진 파일을 es6 모듈 형태로 불러 올 수 있게 함
  * <code>outDir: "./js"</code> : 컴파일 된 파일이 저장되는 경로 지정 
* .ts > .js 변환 : <code>npx tsc 파일명</code>
