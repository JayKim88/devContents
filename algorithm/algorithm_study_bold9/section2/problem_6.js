/*
격자판 최대합

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
▣ 출력설명 
최대합을 출력합니다.
▣ 입력예제 1
5
10 13 10 12 15 
12 39 30 23 11 
11 25 50 53 15 
19 27 29 37 27 
19 13 30 13 19

▣ 출력예제 1 
155
*/

function solution(arr) {
  let result = 0;
  let width = 0;
  let length = 0;
  let crossOne = 0;
  let crossTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    width = length = 0;
    for (let j = 0; j < arr.length; j++) {
      width += arr[i][j];
      length += arr[j][i];
    }
    result = Math.max(result, width, length); //최대값산출
  }

  for (let i = 0; i < arr.length; i++) {
    crossOne += arr[i][i];
    crossTwo += arr[i][arr.length - i - 1];
  }
  result = Math.max(result, crossOne, crossTwo); //최대값산출
  return result;
}

console.log(
  solution(25, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

/*
가로세로 
대각선 1,2

**SOLUTION**
  function solution(arr){  
                let answer=Number.MIN_SAFE_INTEGER;
                let n=arr.length;
                let sum1=sum2=0;
                for(let i=0; i<n; i++){
                    sum1=sum2=0;
                    for(let j=0; j<n; j++){
                        sum1+=arr[i][j];
                        sum2+=arr[j][i];
                    }
                    answer=Math.max(answer, sum1, sum2);
                }
                sum1=sum2=0;
                for(let i=0; i<n; i++){
                    sum1+=arr[i][i];
                    sum2+=arr[i][n-i-1];
                }  
                answer=Math.max(answer, sum1, sum2); 
                return answer;
            }

            let arr=[[10, 13, 10, 12, 15], 
                     [12, 39, 30, 23, 11],
                     [11, 25, 50, 53, 15],
                     [19, 27, 29, 37, 27],
                     [19, 13, 30, 13, 19]];
            console.log(solution(arr));
        </script>
 */
