import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];  

  const handleSelectItem = (item:string) => {
    console.log(item)
  }
  return (
    <>

      <div>
        {/* listGroup component | returns array of items, with heading of city, and when selected, display in console. */}
        <ListGroup items={items} heading ={"Cities"} onSelectItem={handleSelectItem} />
      </div> 
      <div>
        {/* Alert options found in bootstrap */}
        <Alert>Hello <span>World</span></Alert>
      </div>
      <div>
          <Button color='primary' onClick={() => console.log('Clicked')}>Primary</Button>
          <Button color='secondary' onClick={() => console.log('Clicked')}>Secondary</Button>
      </div>
      <div>
      </div>
      </>
  )
}

export default App;
