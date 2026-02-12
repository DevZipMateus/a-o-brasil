import parallaxBg from "@/assets/parallax-logo.jpg";

const ParallaxBanner = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${parallaxBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};

export default ParallaxBanner;
