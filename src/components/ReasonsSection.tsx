import bajaImage from "@/assets/baja-activity.jpg";
import supraImage from "@/assets/supra-activity.jpg";
import aeroImage from "@/assets/aeromodelling-activity.jpg";
import efficycleImage from "@/assets/efficycle-activity.jpg";
import collaborationImage from "@/assets/collaboration-activity.jpg";

const ReasonsSection = () => {
  const reasons = [
    {
      image: bajaImage,
      title: "BAJA Competition",
      description: "Design and build an all-terrain vehicle that will survive the severe punishment of rough terrain.",
      position: "left"
    },
    {
      image: supraImage,
      title: "SUPRA Racing",
      description: "Engineer high-performance formula-style racing cars with cutting-edge technology and innovation.",
      position: "right"
    },
    {
      image: aeroImage,
      title: "Aeromodelling",
      description: "Design and test remote-controlled aircraft to explore the principles of aerodynamics and flight.",
      position: "left"
    },
    {
      image: efficycleImage,
      title: "EFFICYCLE Challenge",
      description: "Create energy-efficient transportation solutions that combine sustainability with engineering excellence.",
      position: "right"
    },
    {
      image: collaborationImage,
      title: "Collaboration & Growth",
      description: "Build lifelong connections and develop leadership skills through hands-on engineering projects.",
      position: "center"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-green-medium relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-golden-light/80 text-sm tracking-wider uppercase mb-4">
            REASONS
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-golden mb-8">
            FIVE REASONS WHY{" "}
            <span className="block">YOU SHOULD JOIN SAE</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                reason.position === "right" ? "lg:flex-row-reverse" : ""
              } ${reason.position === "center" ? "justify-center" : ""}`}
            >
              {/* Diamond Image */}
              <div className="relative flex-shrink-0">
                <div className="w-80 h-80 relative">
                  {/* Diamond Container */}
                  <div className="absolute inset-0 transform rotate-45 overflow-hidden rounded-lg shadow-elegant">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover transform -rotate-45 scale-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 to-transparent"></div>
                  </div>
                  
                  {/* Floating border effect */}
                  <div className="absolute inset-0 transform rotate-45 border-2 border-golden/30 rounded-lg animate-diamond-float"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 text-center ${reason.position !== "center" ? "lg:text-left" : ""} ${reason.position === "right" ? "lg:text-right" : ""}`}>
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-golden mb-4">
                  {reason.title}
                </h3>
                <p className="font-inter text-golden-light/90 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="font-inter px-8 py-4 bg-transparent border-2 border-golden text-golden hover:bg-golden hover:text-green-dark transition-all duration-300 uppercase tracking-wider font-semibold">
            Join Our Society
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;