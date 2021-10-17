import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
  console.log("he");
  // returnComment("Jay") recomputes only in case of change of data regardless of state change in parent component.
  return <div>{returnComment("Jay")}</div>;
}

export default Child;
