/*
Partial<T>

interface A {
    x: number
    y: number
}

Partial<A> = {
    x?: number
    y?: number
}
*/

interface Starship1 {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship1 = (id: number, starship: Partial<Starship1>) => {};

updateStarship1(1, { name: "Explorer" });
updateStarship1(2, { enableHyperjump: true });
