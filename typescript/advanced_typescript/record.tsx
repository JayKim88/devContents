/*
Record<K, T>

const aRecord: Record<string, number> = {
  apples: 10,
  oranges: 20
}
*/

interface Trait {
  area: string;
  language: string;
}

const country: Record<string, Trait> = {
  Korea: {
    area: "asia",
    language: "korean",
  },
  Germanry: {
    area: "europe",
    language: "German",
  },
};
