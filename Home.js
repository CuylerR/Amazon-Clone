import React from 'react';
import Product from './Product';
import "./Home.css";


function Home() {
  return (
    <div className="home">
        <img 
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Covid19/Generic/GWBleedingHero_eng_COVIDUPDATE__XSite_1500x600_pv_en-GB._CB428684220_.jpg" 
        alt="" 
        />
        <div className="home__row">
            <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            <Product 
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl "
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>
        <div className="home__row">
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

        </div>
        <div className="home__row">
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />


         </div>


         <div className="home__row">
            <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
 
         </div>






    </div>
  )
}

export default Home;