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
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
