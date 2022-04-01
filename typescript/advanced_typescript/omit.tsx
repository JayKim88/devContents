interface Trait1 {
  area: string;
  language: string;
  name: string;
}

type omitedType = Omit<Trait1, "area" | "language">;
