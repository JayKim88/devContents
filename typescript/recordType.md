### Type 의 통일성을 위한 코드(Record)
기존 정의된 타입의 display 만 변경해주고자 할 때 아래와 같이 Record type 을 사용해 재정의가 가능하다.
```typescript
export const FRUIT_TYPE: Record<string, string> = {
  [FruitType.Apple]: 'Apple',
  [FruitType.Banana]: 'Banana',
  [FruitType.Mandarin]: 'Mandarin',
};

export enum FruitType {
  Apple = 'APPLE',
  Banana = 'BANANA',
  Mandarin = 'MANDARIN',
}
```
Another Example
```typescript
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
```
