//

// Closer
// 폐쇄적인 공간에서 만들어졌던 자료들이 외부로 연결고리가 만들어지는 형태
// 함수가 끝나도 생성한 시점의 스코프 체인을 계속 들고 있는 것
// 클로저 때문에 함수가 끝나도 자식 함수가 부모함수/글로벌 스코프에 접근 가능
if (1 < 2) {
  let f = function () {
    let abc = 123; // 함수가 끝난 시점에서 연결고리가 없으면 메모리는 지움
    let ddd = function () {
      // return 55;
      return abc; // 상위로 스코프를 넓혀서 변수가 있으면 리턴함, 연결고리를 만들어줬음 => 스코프끼리 연결된 것 scope chain
    };
    return ddd;
  };
  // console.log(ddd);  // ddd에 접근할 순 없지만 안에 담아뒀던 자료들은 밖에서 확인 가능
  // 함수가 종료되었다고 하더라도 밖에서 연결고리가 만들어지면 js는 메모리에서 지우지 않음
  const ccc = f();
  console.log(ccc()); // 123
}

let d = "x";
function outer() {
  let a = 1;
  let b = "B";

  function inner() {
    let a = 2;
    console.log(b);
  }
  return inner;
}

let someFun = outer();
someFun();
