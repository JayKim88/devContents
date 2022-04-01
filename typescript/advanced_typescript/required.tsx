/*
Required<T>

interface A {
    x?: number;
    y?: number;
}

Required<A> = {
    x: number;
    y: number;
}

*/

interface Starship2 {
  name?: string;
  enableHyperjump?: boolean;
}

const updateStarship2 = (id: number, starship: Required<Starship2>) => {};

updateStarship2(1, { name: "Explorer", enableHyperjump: true });
