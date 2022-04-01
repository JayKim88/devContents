interface StarshipProps {
  color?: "blue" | "red" | "green";
}

function paintStarshipp(
  id: number,
  color: NonNullable<StarshipProps["color"]>
) {
  return {
    id,
    color,
  };
}

type PaintStarshipReturn = ReturnType<typeof paintStarshipp>;
/*
type PaintStarshipReturn = {
    id: number;
    color: "blue" | "red" | "green";
}
*/
paintStarshipp(1, "green");
