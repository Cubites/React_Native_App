# TypeScript
### 선언 방법
  <pre>
  let names:string = "길동";
  let age:number = 140;
  let isAdult:boolean = true;
  let member:string[] = ['철수', '영희', '길동']; // 배열
  let member2:Array< string> = ['철수', '영희', '길동']; // 배열<br>
  function add(a: number|string, b:number|string){ ... }
  </pre>

### 용어
* 배열 : 여러 개의 데이터들을 모은 집합, 추가 삭제 가능
* 튜플: 여러 객체를 모아서 담는 리스트, 튜플 내의 값은 수정, 삭제 불가(추가도 안됨)
  <pre>
  let b:[string, number];
  b = ['z', 1];
  </pre>
* void
  <pre>function testFunc:void{ ... }</pre>
* enum
  <pre>
  enum Os {
    Window = 3,
    Ios = 2,
    Android = 1
  }
  </pre>
* null, undefined
  <pre>
  let a:null;
  let b:undefined
  </pre>

### 데이터 타입
* number : <pre>let a:number = 10;<br>const b:number = 30;</pre>
* string : <pre>let str:string = 'text';</pre>
* boolean : <pre>let b:boolean = true;</pre>
#### 원시 타입(primitive)
* null, undefined
  <pre>
  let x;<br>console.log(x); // undefined
  <br>
  let y = null;<br>console.log(y); // null
  <br>
  let z:number = undefined; // z => undefined
  <br>
  let l:bigint = 1234567890n;
  </pre>
* Symbol
  * ECMAScript 2015에서 도입된 Primitive
  <pre>
  let sym1 = Symbol();
  let sym2 = Symbol();

  console.log(sym1 === sym2); // false
  </pre>
  * Symbol은 Unique한 객체 속성(유일한 값)을 만들기 위해 사용됨

#### 그 외 타입
* any : 어떠한 데이터 값이라도 받아들일 수 있는 타입
  <pre>
  let unknown:any = 1;
  unknown = true;
  unknown = 'any타입';
  </pre>
* object, void
* never : 함수가 항상 Exception을 throw하거나 함수 내 무한루프가 있어 절대 리턴하지 않을 경우
  ```javascript
  function error(msg):never{
    throw new Errorr(msg);
  }
  error('에러가 발생');

  function loop():never{
    while(0){

    }
  }
  ```

#### 배열 타입
  ```javascript
  // []를 이용한 배열
  let scores:number[];
  scores = [80, 90, 80, 65];

  // Array<T>를 사용한 배열
  let scores:Array< number > = [80, 90, 80, 65];
  ```
#### Enum (열거형)
* enum은 <strong>"상수들을 명명하여"</strong> 나열한 집합을 정의한 것
* 숫자 혹은 문자열을 대신하여 레이블을 부여하기 때문에 코드 가독성을 높여줌
* 예
  ```javascript
  enum Color {red, Green, Blue};
  <br>
  // enum 변수 선언 및 값 할당
  let c:Color = Color.Green;
  console.log(c);
  ```
#### Tuple (튜플)
* 정해진 요소 수와 요소 타입을 설정
  ```javascript
  let score: [string, number, number, string];
  score = ['철수', 30, 10, '민수'];
  ```

#### 함수

#### interface
* 인터페이스는 객체가 갖는 구조를 미리 만들어 놓은 것
  ```javascript
  inferface Order{
    id: number;
    product: string;
    deliver: Boolean;
  }
  let pr:Order = [id: 10, product: '좋은 상품', deliver: true]
  ```

## Class
* public : 내, 외부 해당 멤버를 모두 접근할 수 있음
  <br>> TypeScript의 클래스는 default로 public을 갖음
* protected : 해당 클래스와 그 클래스로부터 파생된 서브 클래스에서 사용 가능
* private : 해당클래스 내에서만 사용가능
* 예
  ```javascript
  class Shape{
    private name:string;
    public x:number = 0;
    public y:number = 0;
    constructor(name){
      this.name = name;
    }
    draw(x, y){
      console.log("Draw" + this.name + "at" + this.x + ", " + this.y);
    }
  }

  let s1 = new Shape("홍길동박스");
  s1.x = 100;
  s1.y = 200;
  s1.draw();
  let name = s1.name; // error (private 이라 접근 불가)
  ```