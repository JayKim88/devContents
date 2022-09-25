# Confusing Concepts

### Q1) HTML: The difference between attribute and property

**What is an attribute?**
Attributes carry additional information about an HTML element and come in `name=”value”` pairs. Example: `<div class=”my-class”></div>`. Here we have a div tag and it has a class attribute with a value of my-class.

**What is a property?**
Property is a representation of an attribute in the HTML DOM tree. So the attribute in the example above would have a property named `className` with a value of `my-class`.

```
Our DIV node
 |- nodeName = "DIV"
 |- className = "my-class"
 |- style
   |- ...
 |- ...
```

**What is the difference between attribute and property?**
Attributes are in your HTML text document/file, whereas properties are in HTML DOM tree. This means that <strong>attributes do not change and always carry initial (default) values</strong>. However, HTML properties can change, for example when user checks a checkbox, inputs text to textarea or uses JavaScript to change the property value.

<img src='./image/1-1.png'>
<img src='./image/1-2.png'>

**Only element’s property is changed, because it is in the DOM and dynamic. But element’s attribute is in HTML text and can not be changed!**

### Q2) parameter 와 argument 의 차이점

parameter는 함수 혹은 메서드 정의에서 나열되는 변수 명이다. 반면 argument는 함수 혹은 메서드를 호출할 때, 전달 혹은 입력되는 실제 값이다. parameter 실체는 변수이고 argument의 실체는 값입니다. 따라서 두 단어는 명확하게 구분해야 한다.

<img src='./image/2.png'>

**parameter(매개변수)** 와 **argument(전달인자)**

```js
function pExample(str1, str2) //str1과 str2가 parameter
  return a +" "+ b

pExample("apple", "banana") // "apple" 과 "banana" 가 argument
```

### Q3) What is Build?

프로그래머가 작성한 소스코드를 컴퓨터가 이해할 수 있는 기계어(CPU가 읽을 수 있는 이진코드)로 번역하여 실행 가능한 파일로 만드는 과정

<img src='./image/3.png' width='600px'>

#### 빌드 프로세스

- Compile: 소스코드 전체를 기계어로 번역
- Interpreted: 소스코드를 한 줄씩 번역하면서 실행
- Hybrid: 소스코드 전체를 중간코드(바이트코드)로 번역한 뒤 가상머신(VM)에서 한 줄씩 실행

#### 1. Compile Type

C, C++, Go 언어 등

<img src='./image/3-1.png' width='600px'>

- 전처리(Preprocessing)
  : 소스코드의 중심(main)이 실행되기 전에 사전준비를 하는 과정. 예를 들어 C언어에서 #으로 시작되는 구문들(#include, #define)

- 컴파일(Compile)
  : 보통 컴파일러가 인간이 기계어를 이해할 수 있도록 고급언어와 기계어 사이에 중간 단계인 저수준 언어(어셈블리어)로 번역. 이 저수준 언어를 통해 하드웨어를 직접 조작하거나 특수 프로세스 명령어에 접근 등이 가능하다.

- 어셈블(Assemble)
  : 어셈블러가 저수준 언어를 기계어로 번역. CPU가 이해할 수 있는 언어로 번역된 파일을 'Object File' 이라고 함. 여기서 Object 는 객체라는 뜻인데, 이 번역된 파일 하나하나가 실행하는 최종 파일의 일부분으로서의 객체이기 때문이다.

- 링킹(Linking)
  : Object File 들과 필요한 라이브러리들을 연결시켜주고 하나의 실행가능한 파일(executable file)로 만들어 준다.

즉, `컴파일(전처리-컴파일-어셈블) + 링킹 = 빌드` 라고 할 수 있다.

**컴파일 언어의 장점**

- 빌드가 완료된 실행가능한 파일은 실행 속도가 빠르다.
- 매번 번역할 필요 없이 실행 파일만 실행하면 되기 때문에 전체적인 시간면에서 효율적.

**컴파일 언어의 단점**

- 프로그램을 수정해야 할 경우 처음부터 빌드과정을 다시 거쳐야하기 때문에 대규모 프로그램에서는 생산성이 떨어진다.
- 플랫폼에 매우 의존적.

#### 2. Interpreted Type

<img src='./image/3-2.png' width='600px'>

- Javascript, Python, Ruby 가 이 인터프리터 언어에 해당한다고 알려져 있다.
- 목적파일(Object File)을 생성하지 않고 바로 실행하는데, 소스코드의 한 명령 세트마다 기계어로 번역하면서 바로 실행해주는 방식으로 인터프리트라고 한다.
- 각 운영체제에 맞는 해당 언어의 인터프리터만 설치하면 동일한 결과를 얻을 수 있기 때문에 플랫폼에 독립적이다.

**인터프리트 언어의 장점**

- 컴파일과정 없이 바로 실행하기 때문에 수정, 디버깅에 유리해 개발속도가 빠르다.

- 각 플랫폼에 지원하는 인터프리터만 있다면 실행 가능하기 때문에 플랫폼에 독립적이다.

**인터프리트 언어의 단점**

- 빌드 되어있는 컴파일 언어 프로그램보다 실행시간이 느립니다.

- 코드를 열면 다 보이기 때문에 보안에 좋지는 않다.

#### 3. Hybrid Type

- 컴파일 방식과 인터프리트 방식을 혼합
- 바이트 코드 언어로 Java 가 이에 속함

<img src='./image/3-3.png' width='600px'>

고급 언어로 작성된 소스코드를 바이트 코드(bytecode)로 변환하는데 바이트 코드란 일종의 중간 언어라 생각하면 된다.  
그리고 VM(Virtual Machine : 가상머신) 이라는 프로그램에 의해 바이트코드를 기계어로 바꿔준다.

컴파일 언어의 목적파일(기계어)은 하드웨어에 의해 처리되지만, 바이트 코드 파일(Java의 .class file)의 경우 소프트웨어(가상 머신)에 의해 처리된다. 즉, 바이트코드는 해당 가상머신 전용 기계어라고 볼 수 있다.

**VM**

- Java Virtual Machine 인 JVM
- C#의 경우 .NET의 CLR
- VM(가상머신)이 해당 운영체제에 맞게 지원만 해준다면 플랫폼에 독립적으로 실행할 수 있다.

즉, VM을 통해 '플랫폼에 독립적'인 장점을 갖고왔고, 초기 컴파일 단계를 통해 바이트코드로 기계어에 더 가까운 언어로 번역을 한 번 해놓았기 때문에 속도도 기존 인터프리터 언어에 비해 더 빠르다는 장점이 있다.

**하이브리드 언어의 장점**

- 각 플랫폼에 지원하는 가상머신 있다면 실행 가능하기 때문에 플랫폼에 독립적입니다.

**하이브리드 언어의 단점**

- 컴파일 언어처럼 하드웨어를 직접 제어하는 작업은 불가능하다.

출처: https://st-lab.tistory.com/176

### Q4) What is Functional Programming Paradigm ?

- Functional programming is a programming paradigm in which we try to bind everything in pure mathematical functions style.
- It is a declarative type of programming style.
- Its main focus is on “what to solve” in contrast to an imperative style where the main focus is “how to solve”.

Concepts of functional programming:

- Pure functions

  - First, they always produce the same output for same arguments irrespective of anything else.
  - Secondly, they have no side-effects i.e. they do not modify any arguments or local/global variables or input/output streams.

- Recursion
  - There are no “for” or “while” loop in functional languages. Iteration in functional languages is implemented through recursion.
- Referential transparency
  - In functional programs variables once defined do not change their value throughout the program.
- Functions are First-Class and can be Higher-Order

  - The first class variables can be passed to functions as parameter, can be returned from functions or stored in data structures.
  - Higher order functions are the functions that take other functions as arguments and they can also return functions.

- Variables are Immutable
- Shared State

Ref

- [Functional Programming Paradigm](https://www.geeksforgeeks.org/functional-programming-paradigm/amp/)
- [Deep Dive Here!](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
