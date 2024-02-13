import React from 'react'
import Counter from "../components/Counter";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Dhikr = () => {
  return (
    <>
      <div>
        <NavBar/>
      <div>
        <h1 >أستغفر الله</h1>
        <Counter/>
      </div>
      <div>
        <h1>الحمدلله</h1>
        <Counter/>
      </div>
      <div>
      <h1>الله أكبر</h1>

        <Counter/>
      </div>
      
      <Footer/>
      </div>
      
    </>
  )
}

export default Dhikr