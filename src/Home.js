import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image={'https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
            price={239.9}
            image={'https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SX450_.jpg'}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Gear S3 Classic Gear S3 Frontier Galaxy Watch 46mm Smart Watch Fitness Black"
            price={12.9}
            image={'https://m.media-amazon.com/images/I/71+eIQhzIVL._AC_SS350_.jpg'}
            rating={3}
          />
          <Product
            id="23445930"
            title="amazon echo (3rd generation) | Smart speaker with alexa charcoal fabric"
            price={598.99}
            image={'https://www.pbtech.co.nz/imgprod/S/P/SPKAMZ3100__2.jpg'}
            rating={3}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={1.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1283759"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1099.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'}
            rating={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
