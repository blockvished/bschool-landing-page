// Media Features Section
const MediaFeaturesSection = () => {
  const mediaImages = Array(6)
    .fill(null)
    .map((_, i) => `${i + 1}.${i === 0 || i === 5 ? "jpg" : "png"}`);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white text-center">
      {/* Title */}
      <h2 className="text-lg uppercase tracking-widest font-bold text-gray-300 mb-4">
        You Might Have Seen Me On
      </h2>

      {/* Featured Media Text */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg font-semibold text-gray-100">
        <span className="px-4 py-2 bg-gray-800 rounded-md">Forbes</span>
        <span className="px-4 py-2 bg-gray-800 rounded-md">
          The New York Times
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-md">Today</span>
        <span className="px-4 py-2 bg-gray-800 rounded-md">Oprah</span>
        <span className="px-4 py-2 bg-gray-800 rounded-md">People</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {mediaImages.map((src, index) => (
          <div key={index} className="group">
            <img
              src={src}
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl"
              alt={`Media feature ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaFeaturesSection;
