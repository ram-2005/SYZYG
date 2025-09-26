import { Card, CardContent } from "../../../../components/ui/card";
import { ParallaxContainer } from '../../../../components/ParallaxContainer';
export const FeaturesSection = (): JSX.Element => {
  const decorativeImages = [
    {
      className: "w-40 sm:w-56 md:w-64 lg:w-72 top-5 left-5",
      alt: "Design Top",
      src: "/design-2.png",
    },
    {
      className: "w-40 sm:w-56 md:w-64 lg:w-72 bottom-5 right-5",
      alt: "Design Bottom",
      src: "/design-3.png",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 relative "
    >
      {/* Multiple Parallax Background Layers */}
            <ParallaxContainer speed={0.2} className="absolute inset-0">
              <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-400/20 rounded-full blur-xl" />
              <div className="absolute top-32 sm:top-40 right-10 sm:right-20 w-24 sm:w-48 h-24 sm:h-48 bg-purple-400/20 rounded-full blur-xl" />
              <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-12 sm:w-24 h-12 sm:h-24 bg-indigo-400/20 rounded-full blur-xl" />
            </ParallaxContainer>
      
            <ParallaxContainer speed={0.4} className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-cyan-400/15 rounded-full blur-lg" />
              <div className="absolute bottom-1/3 right-1/3 w-12 sm:w-20 h-12 sm:h-20 bg-pink-400/15 rounded-full blur-lg" />
              <div className="absolute top-2/3 left-1/5 w-6 sm:w-12 h-6 sm:h-12 bg-yellow-400/15 rounded-full blur-lg" />
            </ParallaxContainer>
      
            <ParallaxContainer speed={0.6} className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-4 sm:w-8 h-4 sm:h-8 bg-green-400/20 rounded-full blur-md" />
              <div className="absolute bottom-1/4 left-1/6 w-6 sm:w-10 h-6 sm:h-10 bg-orange-400/20 rounded-full blur-md" />
            </ParallaxContainer>
            <ParallaxContainer speed={0.8} className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 w-10 sm:w-20 h-10 sm:h-20 bg-red-400/25 rounded-full blur-sm" />
                  <div className="absolute bottom-1/2 right-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-teal-400/25 rounded-full blur-sm" />
            </ParallaxContainer>
      <div className="container mx-auto px-5 ">
        {/* Decorative Images with Shine */}
        {decorativeImages.map((image, index) => (
          <img
            key={`design-${index}`}
            className={`absolute ${image.className} animate-shine transition-transform duration-75 ease-out pointer-events-none`}
            alt={image.alt}
            src={image.src}
          />
        ))}

        {/* Main Card Content */}
        <Card className="max-w-5xl mx-auto border-none shadow-none bg-transparent">
          <CardContent className="flex flex-col items-center justify-center pt-10 pb-6 space-y-6">
            {/* ⭐ 5-star Image */}
            <img
              className="w-48 sm:w-64 md:w-80 lg:w-[523px] h-auto"
              alt="5 Star Rating"
              src="/5-star.png"
            />

            {/* 🏷️ Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center leading-tight tracking-wide px-4">
              <span className="text-[#ffffff]">The closest you'll get to </span>
              <span className="text-[#e9c608]">Guaranteed success.</span>
            </h2>

            {/* 📝 Subtitle */}
            <p className="text-[#fcfcfc] text-lg sm:text-xl md:text-2xl text-center max-w-3xl leading-7 sm:leading-8 tracking-wide px-4">
              We don&apos;t wing it. We are trusted advisors with a collaborative
              delivery process that is second to none.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
