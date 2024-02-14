import{useState} from 'react'
import "../styles/Dhikr.css";


const Counter = ({index}) => {
    const [count ,setCount = useState([0, 0, 0 ])]

    let incrementCount = (position) => {
        setCount(prevCount => {
            const newCount = [...prevCount];
            newCount[position]+++;
            return newCount;
        });
    };

    let decrementCount = (position) => {
        setCount(prevCount => {
            const newCount = [...prevCount];
            newCount[position] --;
            return newCount;
        });
    };

  return (
    <>
        <div className = "counter">
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
                        {" "}
                        -{" "}
                    </button>
                    <button
                    onClick={() => {
                        incrementCount(index);
                    }}
                    >
                        {" "}
                        +{" "}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter
    





//my code
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