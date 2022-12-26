import "./services.css"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Keyboard, Mousewheel } from "swiper"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Data from "./servicesdata"

function Services () {
    function Cards(props){
        return( 
            <div className="allcard">
            <SwiperSlide>
           <div className="cards">
                <img className="imageSrc" src={props.imageSrc}/>
                <p className="aboutP">{props.aboutP}</p>
                <p className="aboutServices">{props.aboutInfo}</p>
             </div> </SwiperSlide>
             </div>
          
        )
    }

    return(
        <>
        <div className="services">
            <h3>
                Services
            </h3>
            <p>
            We prioritize our customers. We move twice as fast as our competitors, with a guaranteed
delivery time of 3-7 days. However, our prices will not break the bank.
We believe that shipping from the United States to Nigeria should not be prohibitively expensive.
You should not be forced to ship via ocean freight or pay exorbitant handling fees.
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

export default Services