import React, { useEffect, useRef, useState } from "react";

export const RefEx = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
