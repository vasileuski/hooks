import React, { useEffect, useState } from "react";

export const EffEx = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Notification that name was changed`);

    return () => {
      setTimeout(() => console.clear(), 3000);
    };
  }, [name]);

  const onChange = (e: any) => setName(e.target.value);

  return (
    <div>
      {" "}
      <input placeholder="Entersmth" value={name} onChange={onChange} />
      <div>
        <b>Value:</b>
        {name}
      </div>
    </div>
  );
};
