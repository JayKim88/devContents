import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  //useLayoutEffect runs earlier than rendering data(useEffect)
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect!");
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input
        ref={inputRef}
        value="Jay Kim"
        style={{ width: 400, height: 60 }}
      />
    </div>
  );
}

export default LayoutEffectTutorial;
