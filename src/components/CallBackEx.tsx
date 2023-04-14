import React, { useState, useCallback } from "react";

interface Props {
  items: string[];
}

export const CallBackEx: React.FC<Props> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = useCallback((item: string) => {
    setSelectedItem(item);
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      {selectedItem && <p>You selected: {selectedItem}</p>}
    </div>
  );
};
