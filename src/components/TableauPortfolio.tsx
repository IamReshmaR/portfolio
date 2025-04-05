import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

const TableauPortfolio: React.FC = () => {
  const [hoveredDashboard, setHoveredDashboard] = useState<number | null>(null);
  
  const dashboards = [
    {
      title: "Employee Retention Dashboard",
      description: "Advanced filtering and LOD calculations to identify turnover patterns across different departments and roles.",
      embedUrl: "https://public.tableau.com/views/RetentionDashboard_17149626230140/Dashboard2?:showVizHome=no&:embed=true",
      features: [
        "Interactive department filters",
        "Trend analysis over time",
        "Employee satisfaction metrics",
        "Retention risk indicators"
      ]
    },
    {
      title: "Product Portfolio Dashboard",
      description: "Comprehensive insights into product performance and market trends with interactive KPIs and metrics.",
      embedUrl: "https://public.tableau.com/views/ProductPortfolioDashboard_17149623844010/ProductDashboard?:showVizHome=no&:embed=true",
      features: [
        "Product performance metrics",
        "Market share analysis",
        "Revenue trends",
        "Customer feedback integration"
      ]
    },
    {
      title: "Employee Attrition Analysis",
      description: "Detailed analytics of employee attrition patterns using complex LOD expressions for strategic HR planning.",
      embedUrl: "https://public.tableau.com/views/employee_attrition_17149631779560/EmployeeAttritionAnalysis?:showVizHome=no&:embed=true",
      features: [
        "Attrition prediction models",
        "Department-wise analysis",
        "Tenure impact assessment",
        "Cost analysis"
      ]
    }
  ];

  return (
    <section id="tableau" className="section bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Tableau Dashboard Portfolio</h2>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
          Explore my collection of interactive Tableau dashboards, showcasing advanced data visualization 
          techniques and strategic insights across various business domains.
        </p>
        
        <div className="grid grid-cols-1 gap-12">
          {dashboards.map((dashboard, index) => (
            <div 
              key={index} 
              className="border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all relative bg-white/5 backdrop-blur-sm"
              onMouseEnter={() => setHoveredDashboard(index)}
              onMouseLeave={() => setHoveredDashboard(null)}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{dashboard.title}</h3>
                <p className="text-gray-300 mb-6">{dashboard.description}</p>
                
                <div className="aspect-[16/9] w-full mb-6">
                  <iframe
                    src={dashboard.embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>

                {hoveredDashboard === index && (
                  <div className="absolute top-4 right-4 bg-white text-black p-4 rounded-lg shadow-xl max-w-xs z-10 animate-fade-in">
                    <div className="flex items-start gap-2">
                      <Info size={20} className="text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="text-sm space-y-1">
                          {dashboard.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableauPortfolio; 