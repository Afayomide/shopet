import "../Services/services.css"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Keyboard, Mousewheel } from "swiper"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Data from "./pricingData"

function Pricing () {
    function Cards(props){
        return( 
            <div className="allcard" key={props.id}>
            <SwiperSlide  >
           <div className="cards">
               <p>Shipping From</p>
                <p className="aboutP">{props.location}</p>
                <p className="aboutServices">{props.price}</p>
             </div> </SwiperSlide>
             </div>
          
        )
    }

    return(
        <>
        <div className="services reasons">
            <h3 className="chooseUs">
                Pricing that is simple and transparent
            </h3>
            <p>
            Pricing possibilities are limitless, and shipping is lightning fast.

Simply contact the nearest office and fall in love with logistics all over again.
            </p>
            <Swiper
                  modules={[Navigation, Pagination, A11y]}
    spaceBetween={70}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
     // when window width is >= 640px
      800: {
      slidesPerView: 2,
      },
      900: {
        slidesPerView:3
      }
    }}
    >    
    <div className="cardisplay">

 {
  Data.map(Cards)
 } 
  </div>
    </Swiper>
        
            </div>
        </>
    )
}

export default Pricing