/*
가장 짧은 문자거리

한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
▣ 입력예제 1 teachermode e
▣ 출력예제 1 10121012210
*/

function solution(string, char) {
  //1. 주어진 문자의 인덱스 배열 구하기
  //2. 문자열을 돌아가면서 해당 턴 문자의 인덱스와 주어진 문자의 인덱스들의 길이를 비교한 뒤 가장 짧은 것을 result에 넣는다.
  const indexArr = [];
  const length = string.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    if (string[i] === char) indexArr.push(i);
  }

  for (let i = 0; i < length; i++) {
    const disArr = [];
    for (let j = 0; j < indexArr.length; j++) {
      const distance = Math.abs(i - indexArr[j]);
      disArr.push(distance);
    }
    result += Math.min(...disArr);
  }
  return result;
}

console.log(solution("teachermode", "e"));
