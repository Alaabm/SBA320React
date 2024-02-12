import React from "react";
import ListGroup from "../components/ListGroup";
import Button from "../components/Button";

const Resources = () => {
  //LISTGROUP
  //listed items, when clicked on it will display item in console.
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <h1>Rescource Router</h1>
      </div>
      <div>
        {/* listGroup component | returns array of items, with heading of city, and when selected, display in console. */}
        <ListGroup
          items={items}
          heading={"Cities"}
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {/* Alert options found in bootstrap */}
        {/* <Alert>Hello <span>World</span></Alert> */}
      </div>
      <div>
        {/* to pop up alert after clicking button */}
        {/* {alertVisible && <Alert >My alert</Alert>} */}
        {/* <Button color='primary' onClick={() => setAlertVisibility(true)}>Alert</Button> */}
      </div>
    </>
  );
};

export default Resources;
