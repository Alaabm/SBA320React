import React from 'react'
import Counter from "../components/Counter";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Dhikr = () => {
  return (
    <>
      <div>
        <NavBar />
        <div>
          <h1>أستغفر الله</h1>
          <Counter index={0} />
        </div>
        <div>
          <h1>الحمدلله</h1>
          <Counter index={1} />
        </div>
        <div>
          <h1>الله أكبر</h1>
          <Counter index={2} />
        </div>

        <Footer />
      </div>
    </>
  );
};


export default Dhikr

//My code

// const Dhikr = () => {
//   return (
//     <>
//       <div>
//         <NavBar/>
//       <div>
//         <h1 >أستغفر الله</h1>
//         <Counter/>
//       </div>
//       <div>
//         <h1>الحمدلله</h1>
//         <Counter/>
//       </div>
//       <div>
//       <h1>الله أكبر</h1>

//         <Counter/>
//       </div>
      
//       <Footer/>
//       </div>
      
//     </>
//   )
// }

// export default Dhikr