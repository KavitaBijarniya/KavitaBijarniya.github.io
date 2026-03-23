import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Kavita Bijarniya
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Data Analyst & Insights Specialist
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transforming complex data into actionable insights that drive strategic business decisions
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/KavitaBijarniya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavita-bijarniya-249b58260/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ckavita619@gmail.com"
              className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
