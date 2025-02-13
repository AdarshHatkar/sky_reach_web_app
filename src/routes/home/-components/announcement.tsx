
import Slider from "react-slick";

// type AnnouncementPropsType = {}


export default function Announcement() {

    const announcementData = [
        "This is Announcement 1",
        "This is Announcement 2",
        "This is Announcement 3",
        "This is Announcement 4",
        "This is Announcement 5",
        "This is Announcement 6",
    ];

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        vertical: true,
    };

    return <>
        <Slider {...settings}>
            {
                announcementData.map((data, index) => {
                    return <div key={index}>
                        <p className="text-[15px] text-white leading-none">{data}</p>
                    </div>;
                })
            }

        </Slider>
    </>;
}

