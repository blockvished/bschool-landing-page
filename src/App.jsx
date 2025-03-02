import React from "react";
// import "https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css";
// App Component - Main Container
const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <LearnFromBestSection />
      <MediaFeaturesSection />
      <TestimonialsSection />
      <FaqIntroSection />
      <FaqSection />
      <FooterFormSection />
      <Footer />
    </div>
  );
};

// Hero Section with Waitlist Form
const HeroSection = () => {
  return (
    <section className="relative py-8 lg:min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-teal-200 to-blue-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center w-full h-full">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-full lg:h-[95vh]">
          <img
            src="/hero.webp"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center p-6 text-center lg:text-left">
          <h3 className="text-sm uppercase font-semibold text-teal-600 animate-fadeIn">
            B-SCHOOL IS COMING SOON!
          </h3>
          <h1 className="text-5xl font-bold mt-2 leading-tight text-gray-900 animate-fadeIn delay-100">
            Join the VIP Waitlist & Get My 2025 Success Guide!
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-lg animate-fadeIn delay-200">
            Don't miss out! Join the VIP waitlist now to get first dibs when
            B-School reopens on February 13th, 2025. Plus, you'll get instant
            access to my NEW Free Guide:
            <span className="font-semibold">
              {" "}
              12 Mistakes You Can't Afford to Make in 2025.
            </span>
          </p>

          {/* Waitlist Form */}
          <div className="animate-fadeIn delay-300">
            <WaitlistForm />
          </div>

          <p className="mt-4 text-xs text-gray-600 max-w-lg animate-fadeIn delay-400">
            By entering your info, you'll become an MF Insider — with FREE
            access to exclusive insights, private Q+As, and inspiring episodes
            of MarieTV, delivered with love to your inbox. (Unsub anytime in a
            click.) You also agree to our
            <a href="#" className="underline hover:text-teal-600 transition">
              {" "}
              Terms of Use
            </a>{" "}
            and
            <a href="#" className="underline hover:text-teal-600 transition">
              {" "}
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

const WaitlistForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add actual form submission logic here
  };

  return (
    <section className="py-12 px-6 flex justify-center items-center">
      <form
        className="bg-white p-10 rounded-xl shadow-xl w-full max-w-2xl mx-auto border border-gray-300"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Join the VIP Waitlist
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-[#64B5F6] focus:border-[#64B5F6] transition shadow-sm"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:ring-[#64B5F6] focus:border-[#64B5F6] transition shadow-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1976D2] hover:bg-[#1565C0] text-white font-semibold py-4 rounded-lg transition duration-300 shadow-md text-lg"
          >
            Get My Free Guide
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-600 text-center">
          By joining, you agree to our{" "}
          <a href="#" className="underline text-[#1976D2] hover:text-[#1565C0]">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-[#1976D2] hover:text-[#1565C0]">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </section>
  );
};

// Learn From The Best Section
const LearnFromBestSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 text-white flex flex-col lg:flex-row items-center">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
        <h2 className="text-4xl font-extrabold leading-tight">
          Learn From <span className="text-yellow-300">The Best</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          B-School is led by <span className="font-semibold">Marie Forleo</span>
          , a <span className="italic">#1 New York Times</span> best-selling
          author of <em>Everything is Figureoutable</em> and creator of the
          award-winning show <span className="font-semibold">MarieTV</span>.{" "}
          <br />
          <br />
          Named by <span className="font-semibold">Oprah</span> as a thought
          leader, Marie’s mission is to help you unlock your full potential and
          use your gifts to change the world.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 bg-gradient-to-r from-teal-550 via-teal-400 to-teal-300">
        <img
          src="/RIGHT.webp"
          alt="Marie Forleo"
          className="w-full max-h-[450px] object-cover rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
};

// Media Features Section
const MediaFeaturesSection = () => {
  const mediaImages = Array(6)
    .fill(null)
    .map((_, i) => `/${i + 1}.${i === 0 || i === 5 ? "jpg" : "png"}`);

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

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophia Martinez",
      position: "Founder, Luxe Design Studio",
      text: "B-School transformed my business! I now earn 10x more and have true time freedom.",
    },
    {
      name: "James Carter",
      position: "CEO, GrowthHub Marketing",
      text: "The strategies I learned helped me land my dream clients consistently.",
    },
    {
      name: "Elena Roberts",
      position: "Co-Founder, EcoEssentials",
      text: "I tripled my revenue in one year after implementing B-School strategies.",
    },
    {
      name: "Mark Lewis",
      position: "Founder, Freelance Mastery",
      text: "From side-hustle to full-time business in just 6 months after B-School.",
    },
    {
      name: "Natasha Singh",
      position: "Online Course Creator",
      text: "B-School gave me the confidence to finally launch my online courses.",
    },
    {
      name: "Dylan Foster",
      position: "E-commerce Entrepreneur",
      text: "Best investment I've ever made. Highly recommend it to every entrepreneur.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF5E8] to-[#F3E8D5] text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-900">
        B-School Works. <span className="text-teal-600">Here's Proof.</span>
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
        14 years, nearly 80,000 students from 650+ industries worldwide. There's
        a reason we're the gold standard in this industry.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#FEF8F2] p-6 shadow-lg rounded-xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      {/* Reviewer Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/REVIEW.jpg" // Supports different reviewer images
          alt={testimonial.name}
          className="w-14 h-14 rounded-full border border-gray-300"
        />
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 text-yellow-500 text-lg">
        {Array(5)
          .fill("⭐")
          .map((star, i) => (
            <span key={i}>{star}</span>
          ))}
      </div>

      {/* Testimonial Text */}
      <p className="mt-3 text-gray-800 italic">"{testimonial.text}"</p>
    </div>
  );
};

// FAQ Introduction Section
// FAQ Introduction Section
const FaqIntroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#E3F2FD] to-[#FFFFFF] text-center">
      <h2 className="text-4xl font-bold text-[#1565C0]">
        Questions? Ask Away!
      </h2>
    </section>
  );
};

// FAQ Section
const FaqSection = () => {
  const faqs = [
    {
      question:
        "I'm new and don't have a business yet — will B-School work for me?",
      answer:
        "Yes! Many students start with just an idea—or no idea at all—and leave with a thriving business. Success isn't linear, but with commitment, you can achieve your vision.",
      testimonial: {
        text: "I'm thrilled that my product is now real. I have 20 testers receiving 8 Breakfast Cure bundles. My business is finally taking shape!",
        author: "KAREN TAYLOR",
      },
    },
    {
      question: "How is B-School different from other business programs?",
      answer:
        "B-School blends strategy with mindset shifts, providing actionable steps and a supportive community. With 14+ years of success across 650+ industries, it stands apart.",
      testimonial: {
        text: "No other program delivered results like B-School. The strategy and psychology approach was my breakthrough moment.",
        author: "SARAH JOHNSON",
      },
    },
    {
      question: "How much time will I need to commit each week?",
      answer:
        "Most students spend 3-5 hours per week. The program is flexible, allowing you to progress at your own pace with lifetime access.",
      testimonial: {
        text: "As a mom of three, I worried about time. But the lessons were so well-structured that I fit them into small pockets of time.",
        author: "MICHELLE RIVERA",
      },
    },
    {
      question: "Will this work for my specific industry?",
      answer:
        "Absolutely! B-School has helped entrepreneurs across 650+ industries. The principles apply to any business model with minor customizations.",
      testimonial: {
        text: "I wasn't sure if B-School would work for my legal services, but the marketing and strategy principles were highly effective.",
        author: "DAVID THOMPSON",
      },
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#FEFEFF] to-[#F4FAFF]
 max-w-6xl mx-auto px-6 py-16 rounded-lg shadow-lg"
    >
      {faqs.map((faq, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-3xl font-semibold text-[#0D47A1]">
            {faq.question}
          </h3>
          <p className="mt-4 text-lg bg-gradient-to-b from-[#F9FCFF] to-[#DFF3FC] ">
            {faq.answer}
          </p>
          <div className="bg-[#E8F4FC] p-6 rounded-lg mt-6 shadow-md">
            <p className="text-gray-800 italic text-lg">
              "{faq.testimonial.text}"
            </p>
            <p className="mt-4 font-semibold text-gray-700">
              {faq.testimonial.author}
            </p>
          </div>
          {index < faqs.length - 1 && (
            <div className="w-3/4 mx-auto my-10 border-t-2 border-[#B3E5FC] opacity-50"></div>
          )}
        </div>
      ))}
    </section>
  );
};

// Footer Form Section
const FooterFormSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#DFF3FC] to-[#F9FCFF] text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        When does B-School start?
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        <strong>B-School doors open on February 13th, 2025!</strong> Put your
        name and email on the VIP waitlist below so you get first dibs when
        doors reopen. Plus, I'll send you my brand new free guide:
        <strong className="text-[#1565C0]">
          {" "}
          12 Entrepreneurial Mistakes You Can't Afford to Make in 2025.
        </strong>{" "}
        So you can stop struggling and start seeing results in your business.
      </p>

      <form className="mt-8 bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto border border-gray-200">
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64B5F6] mb-4 transition duration-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#64B5F6] mb-4 transition duration-300"
        />
        <button className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white py-3 px-6 w-full rounded-md font-semibold text-lg transition duration-300 shadow-md">
          Get My Free Guide
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-600 max-w-md mx-auto">
        By entering your info, you'll become an MF Insider — with FREE access to
        exclusive insights, private Q+As, and inspiring episodes of MarieTV,
        delivered with love to your inbox. (Unsub anytime in a click.) You also
        agree to our{" "}
        <a
          href="#"
          className="underline text-[#1976D2] hover:text-[#1565C0] transition duration-300"
        >
          Terms of Use
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="underline text-[#1976D2] hover:text-[#1565C0] transition duration-300"
        >
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white text-center">
      <p>&copy; 2025 B-School. All Rights Reserved.</p>
      <p className="mt-2 text-sm">
        <a href="#" className="underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="underline">
          Terms of Use
        </a>
      </p>
    </footer>
  );
};

export default App;
