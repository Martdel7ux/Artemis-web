export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#070a12] px-5 py-28 text-center"
    >
      {/* Background video */}
      <div aria-hidden className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Legibility + brand overlays */}
        <div className="absolute inset-0 bg-[#070a12]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-[#070a12]/30" />
        <div
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(22,201,195,0.16), transparent 70%)",
          }}
        />
      </div>

      {/* Centered headline */}
      <h1 className="font-poppins relative z-10 mx-auto max-w-4xl text-[clamp(2.05rem,6vw,5rem)] font-light uppercase leading-[1.12] tracking-[0.01em] text-white">
        AI built with empathy.
        <br />
        Talent built for what&rsquo;s next.
      </h1>
    </section>
  );
}
