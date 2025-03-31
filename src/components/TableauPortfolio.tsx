import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

const TableauPortfolio: React.FC = () => {
  const [hoveredDashboard, setHoveredDashboard] = useState<number | null>(null);
  
  const dashboards = [
    {
      title: "Employee Retention Dashboard",
      description: "Advanced filtering and LOD calculations to identify turnover patterns across different departments and roles.",
      imageUrl: "https://public.tableau.com/static/images/Re/RetentionDashboard_17149626230140/Dashboard2/1.png",
      liveUrl: "https://public.tableau.com/app/profile/reshma.rajan3751/viz/RetentionDashboard_17149626230140/Dashboard2?publish=yes",
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
      imageUrl: "https://public.tableau.com/static/images/Pr/ProductPortfolioDashboard_17149623844010/ProductDashboard/1.png",
      liveUrl: "https://public.tableau.com/app/profile/reshma.rajan3751/viz/ProductPortfolioDashboard_17149623844010/ProductDashboard?publish=yes",
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
      imageUrl: "https://public.tableau.com/static/images/em/employee_attrition_17149631779560/EmployeeAttritionAnalysis/1.png",
      liveUrl: "https://public.tableau.com/app/profile/reshma.rajan3751/viz/employee_attrition_17149631779560/EmployeeAttritionAnalysis?publish=yes",
      features: [
        "Attrition prediction models",
        "Department-wise analysis",
        "Tenure impact assessment",
        "Cost analysis"
      ]
    }
  ];

  return (
    <div className="bg-black text-white py-20 px-4 md:px-8">
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
              className="border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all relative"
              onMouseEnter={() => setHoveredDashboard(index)}
              onMouseLeave={() => setHoveredDashboard(null)}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{dashboard.title}</h3>
                <p className="text-gray-300 mb-6">{dashboard.description}</p>
                
                <div className="aspect-video relative mb-6 group">
                  <img 
                    src={dashboard.imageUrl} 
                    alt={dashboard.title}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={dashboard.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      View Interactive Dashboard
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Mini Popup */}
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
    </div>
  );
};

export default TableauPortfolio; 