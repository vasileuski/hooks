import React, { useEffect, useState } from "react";

export const EffEx = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Notification that name was changed`);
  }, [name]);

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
