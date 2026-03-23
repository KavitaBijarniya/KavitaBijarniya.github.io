import { ExternalLink, Github, TrendingUp, DollarSign, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Retail Performance Analysis Dashboard',
      description:
        'Comprehensive retail analytics solution monitoring 12+ KPIs including Total Sales (5.34M), Profit (1.54M), and YoY Growth (23.48%). Built a 3-page executive dashboard that improved decision-making efficiency by 40%.',
      icon: TrendingUp,
      color: 'blue',
      technologies: ['Power BI', 'SQL', 'DAX', 'Excel'],
      metrics: ['100K+ transactions', '12+ KPIs', '40% efficiency gain'],
      dashboardLink: 'https://app.powerbi.com/view?r=eyJrIjoiMWViNmU2ZWQtOGJiYi00Nzk1LTlkZDQtOWI2YWIyOTE1ZmMzIiwidCI6ImFmZmM4YTIyLWY1ZDMtNDA4Zi05NThlLWFiOTY0ODI3YmU5OSJ9',
      repoLink: 'https://github.com/KavitaBijarniya/Retail-Performance-Analysis-PowerBI-SQL-Excel-Powerpoint-',
    },
    {
      title: 'Hotel Booking Cancellation & Revenue Analysis',
      description:
        'Analyzed 6,000+ hotel bookings (2022-2024) using Python, reducing missing data from 8% to 0%. Identified a 4.1pp higher cancellation rate in corporate channels and revealed that 51% of revenue was driven by booking volume rather than pricing.',
      icon: DollarSign,
      color: 'green',
      technologies: ['Python', 'Pandas', 'Tableau', 'Excel'],
      metrics: ['6,000+ bookings', '7 key features', '8% to 0% missing data'],
      dashboardLink: 'https://public.tableau.com/app/profile/kavita.bijarniya/viz/BookingAnalysis_17738348663360/Dashboard1',
      repoLink: 'https://github.com/KavitaBijarniya/Data-Analysis-Projects-Using-Power-BI-SQL/tree/main/Hotel%20Booking%20Analysis%20using%20Python',
    },
    {
      title: 'Financial Transaction Fraud Detection Dashboard',
      description:
        'End-to-end fraud detection dashboard analyzing 6K+ financial transactions. Identified high-risk patterns across device, transaction type, and geography, uncovering that ATM and mobile channels contributed to the highest fraud rates (~3%).',
      icon: Shield,
      color: 'orange',
      technologies: ['Power BI', 'DAX', 'Excel'],
      metrics: ['6K+ transactions', '~3% fraud rate', 'Multi-channel analysis'],
      dashboardLink: 'https://app.powerbi.com/view?r=eyJrIjoiYzNhZjgwNTAtMTVhZS00MDZhLWJjMzUtZGQyZmI2OTk4M2FlIiwidCI6ImFmZmM4YTIyLWY1ZDMtNDA4Zi05NThlLWFiOTY0ODI3YmU5OSJ9',
      repoLink: 'https://github.com/KavitaBijarniya/Data-Analysis-Projects-Using-Power-BI-SQL/tree/main/Financial%20Transaction%20Fraud%20Analysis',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { gradient: string; icon: string; border: string } } = {
      blue: {
        gradient: 'from-blue-50 to-blue-100',
        icon: 'text-blue-600',
        border: 'border-blue-200',
      },
      green: {
        gradient: 'from-green-50 to-green-100',
        icon: 'text-green-600',
        border: 'border-green-200',
      },
      orange: {
        gradient: 'from-orange-50 to-orange-100',
        icon: 'text-orange-600',
        border: 'border-orange-200',
      },
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world analytics solutions delivering measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${colors.gradient} p-6 border-b ${colors.border}`}>
                  <Icon className={`${colors.icon} mb-4`} size={40} />
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r ${colors.gradient} ${colors.icon} rounded-full text-xs font-medium border ${colors.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <a
                        href={project.dashboardLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                      >
                      <ExternalLink size={16} className="mr-2" />
                      Dashboard
                    </a>
                   <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                      >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
