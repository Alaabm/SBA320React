
import { useState } from "react";
import "../styles/Dhikr.css";

interface CounterProps {
  index: number; // Assuming index is of type number
}

const Counter = ({ index }: CounterProps) => {
  const [count, setCount] = useState<number[]>([0, 0, 0]);

  const incrementCount = (position: number) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[position]++;
      return newCount;
    });
  };

  const decrementCount = (position: number) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[position]--;
      return newCount;
    });
  };

  return (
    <>
      <div className="counter">
        <div>
          <h1>{count[index]}</h1>
        </div>
        <div className="buttons">
          <div>
            <button
              onClick={() => {
                decrementCount(index);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                incrementCount(index);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;


//previous code
// const Counter = () => {
//     const [count, setCount] = useState(0)
    

//     let incrementCount = () => {
//         setCount(count +1);
//     };

//     let decrementCount = () => {
//         setCount(count -1);
//     };


//   return (
//     <>
//         <div className= "counter">
//             <div>
//                 <h1>{count}</h1>
//             </div>
//             <div className = "buttons">
//                 <button onClick={decrementCount}> - </button>
//                 <button onClick={incrementCount}> + </button>
//             </div>
//         </div>
         
//     </>
//   )
// }

// export default Counter