
type CarouselDotsPropsType = {
    slideCount: number,
    currentSlide: number,
    goToSlide: (arg: number) => void
}


export default function CarouselDots({ currentSlide, goToSlide, slideCount }: CarouselDotsPropsType) {

    // let num:number = 1;

    return <>
        <div className="flex items-center justify-center gap-4">
            <div className="w-3 h-3 rounded-full border-white border-[2px]" onClick={() => {
                goToSlide(0);
                console.log("0");
            }}></div>
            <div className="w-1 h-1 rounded-full border-white border-[2px]" onClick={() => {
                goToSlide(1);
                console.log("1");
            }}></div>
            <div className="w-1 h-1 rounded-full border-white border-[2px]" onClick={() => {
                goToSlide(2);
                console.log("2");
            }}></div>

        </div>
    </>;
}

