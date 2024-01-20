import { useState } from "react";

const listItems = ["Patna", "Bhopal", "Darbhanga", "Kolkata", "Jakarta"];
function Table() {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>Table</h1>
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Table;
