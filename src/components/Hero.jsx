import React from 'react'

const Hero = () => {
  return (
   <main className="hero">
    <div className='hero-content'>
        <h1>Nike Vomero 18</h1>
        <h3>Men's Road Running Shoes</h3>
        <h2>MRP : ₹ 13 295.00</h2>
        <p>Maximum cushioning in the Vomero provides a comfortable ride for everyday runs. Our softest, most cushioned ride has lightweight ZoomX foam stacked on top of responsive ReactX foam in the midsole. Plus, a redesigned traction pattern offers a smooth heel-to-toe transition.</p>
               <div className='buttons'>
                <button>Shop Now</button>
               
               </div>
    </div>
    <div className="hero-image">
    <img src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?cs=srgb&dl=pexels-pluyar-786003.jpg&fm=jpg" alt=""  height/>
    </div>
   </main>
  )
}

export default Hero