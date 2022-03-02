import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Navigation,
    Autoplay
} from "swiper/core";
import { Carsolestyle } from "./Carsole.style";

SwiperCore.use([EffectCoverflow, Navigation]);

export default function Carsole() {

    SwiperCore.use([Autoplay]);
    return (
        <Carsolestyle>
            <div className="container">
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="images/1.jpg" />
                        <p className="text">Items #1</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/2.jpg" />
                        <p className="text">Items #2</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/3.png" />
                        <p className="text">Items #3</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/4.jpg" />
                        <p className="text">Items #4</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/5.png" />
                        <p className="text">Items #5</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/6.jpg" />
                        <p className="text">Items #6</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Carsolestyle>
    );
}
