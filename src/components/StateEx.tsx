import React, { useState } from "react";

export const StateEx = () => {
  const [name, setName] = useState("");

  return (
    <div>
      {" "}
      <input
        placeholder="Entersmth"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <b>Value:</b>
        {name}
      </div>
    </div>
  );
};
