interface StarshipProps {
  color?: "blue" | "red" | "green";
}

function paintStarship(
  id: number,
  color: NonNullable<StarshipProps["color"]>
) {}

paintStarship(1, undefined); // once strick null checked
