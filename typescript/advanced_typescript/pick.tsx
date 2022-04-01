interface Trait {
  area: string;
  language: string;
}

type newTrait = Pick<Trait, "area">;
