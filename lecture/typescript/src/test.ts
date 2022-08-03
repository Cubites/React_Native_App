interface Person {
    name: string;
    age?: number; // ? = 값이 들어가도 되고 안들어가도 됨
}
interface Developer extends Person { // Person을 상속 받음
    // name: string; // Person을 상속받아 name을 정의할 필요가 없어짐
    skills: string[];
}

const person: Person = {
    name: "홍길동",
    age: 120
}

const expert: Developer = {
    name: "내이름",
    skills: ['javascript', 'react', 'react-native']
}