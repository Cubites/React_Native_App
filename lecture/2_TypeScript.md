# TypeScript
### 선언 방법
  <pre>
  let names:string = "길동";
  let age:number = 140;
  let isAdult:boolean = true;
  let member:string[] = ['철수', '영희', '길동']; // 배열
  let member2:Array< string> = ['철수', '영희', '길동']; // 배열
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