interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

import { useState } from "react";

//Passing props{}
function ListGroup({ items, heading, onSelectItem }: Props) {
    // initiate useState
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
    {/* Display heading */}
      <h1>{heading}</h1>
    {/* If no items are found */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
    {/* map over each item in the array */}
        {items.map((item, index) => (
          <li
            className={
            // hover over items or list item
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
            // onclick, select item, and display item in console
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {/* Item listed */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
