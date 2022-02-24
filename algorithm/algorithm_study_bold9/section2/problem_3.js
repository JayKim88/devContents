/*
가위 바위 보

A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다. 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
▣ 입력예제 1 
5
23313 
11223
▣ 출력예제 1 
A
B
A
B 
D
*/

function solution(arr1, arr2) {
  let result = "";
  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i];
    const b = arr2[i];
    if (a === b) {
      result += "D";
    } else if (
      (a === 1 && b === 3) ||
      (a === 2 && b === 1) ||
      (a === 3 && b === 2)
    ) {
      result += "A";
    } else {
      result += "B";
    }
  }

  return result;
}

console.log(solution([3, 2, 2, 2, 2], [3, 1, 2, 2, 3]));

/*
서열을 정하자.
같은 숫자면 D
가위(1) 바위(2) -> 바위 B
가위(1) 보(3) -> 가위 A
가위(1) 가위(1) -> 무승부 D
바위(2) 가위(1) -> 바위 A
바위(2) 바위(2) -> 무승부 D
바위(2) 보(3) -> 보 B
보(3)..
보(3)..
보(3)..
23313
11223

**SOLUTION**
   function solution(a, b){         
                let answer="";
                for(let i=0; i<a.length; i++){
                    if(a[i]===b[i]) answer+="D ";
                    else if(a[i]===1 && b[i]===3) answer+="A ";
                    else if(a[i]===2 && b[i]===1) answer+="A ";
                    else if(a[i]===3 && b[i]===2) answer+="A ";
                    else answer+="B ";
                }
                
                return answer;
            }

            let a=[2, 3, 3, 1, 3];
            let b=[1, 1, 2, 2, 3];
            console.log(solution(a, b));

 */
