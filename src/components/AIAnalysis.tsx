import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import Transition from './Transition';

interface AnalysisResult {
  title: string;
  insights: string[];
  confidence: number;
  recommendations: string[];
  chartData: {
    name: string;
    value: number;
  }[];
}

const datasets: Record<string, AnalysisResult> = {
  'covid_analysis': {
    title: 'COVID-19 Data Analysis',
    insights: [
      'Identified strong correlation between vaccination rates and reduced severity (r=0.89)',
      'Peak transmission periods align with seasonal patterns (p < 0.001)',
      'Geographic clustering shows 78% effectiveness of containment measures',
      'Time series analysis reveals 23% improvement in recovery rates'
    ],
    confidence: 94,
    recommendations: [
      'Implement targeted vaccination campaigns in low-coverage areas',
      'Enhance preparedness during predicted peak seasons',
      'Scale successful containment strategies to other regions'
    ],
    chartData: [
      { name: 'Jan', value: 65 },
      { name: 'Feb', value: 72 },
      { name: 'Mar', value: 89 },
      { name: 'Apr', value: 83 },
      { name: 'May', value: 73 },
      { name: 'Jun', value: 92 }
    ]
  },
  'customer_segmentation': {
    title: 'Customer Segmentation Analysis',
    insights: [
      'Identified 4 distinct customer segments with 92% silhouette score',
      'High-value segment shows 3.5x higher retention rate',
      'Price sensitivity varies significantly by segment (p < 0.001)',
      'Behavioral patterns predict churn with 88% accuracy'
    ],
    confidence: 91,
    recommendations: [
      'Develop targeted marketing campaigns for each segment',
      'Optimize pricing strategy based on segment elasticity',
      'Implement early intervention for high churn-risk customers'
    ],
    chartData: [
      { name: 'Seg 1', value: 45 },
      { name: 'Seg 2', value: 82 },
      { name: 'Seg 3', value: 67 },
      { name: 'Seg 4', value: 93 }
    ]
  }
};

const AIAnalysis = () => {
  const [selectedDataset, setSelectedDataset] = useState<string>('covid_analysis');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    setCurrentInsightIndex(0);
    
    // Simulate analysis time
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  useEffect(() => {
    if (showResults && currentInsightIndex < datasets[selectedDataset].insights.length) {
      const timer = setTimeout(() => {
        setCurrentInsightIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showResults, currentInsightIndex, selectedDataset]);

  useEffect(() => {
    startAnalysis();
  }, [selectedDataset]);

  return (
    <section className="section bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <Transition animation="fade">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="text-green-400" size={24} />
            <span className="inline-block py-1 px-3 text-xs rounded-full bg-white/10 text-white">
              AI Analysis Demo
            </span>
          </div>
        </Transition>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <select
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value)}
              className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2 w-full md:w-auto
                focus:outline-none focus:ring-2 focus:ring-green-400/20"
            >
              <option value="covid_analysis">COVID-19 Data Analysis</option>
              <option value="customer_segmentation">Customer Segmentation Analysis</option>
            </select>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-12 h-12 text-green-400 animate-spin mb-4" />
                <p className="text-gray-400">Analyzing data patterns...</p>
              </div>
            ) : showResults && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Analysis Insights</h3>
                  <div className="space-y-3">
                    {datasets[selectedDataset].insights.slice(0, currentInsightIndex).map((insight, index) => (
                      <Transition key={index} animation="slide-up" delay={index * 200}>
                        <div className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <p className="text-gray-300">{insight}</p>
                        </div>
                      </Transition>
                    ))}
                  </div>
                </div>

                {currentInsightIndex >= datasets[selectedDataset].insights.length && (
                  <>
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-400">Confidence Score</h4>
                        <span className="text-green-400 font-semibold">{datasets[selectedDataset].confidence}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${datasets[selectedDataset].confidence}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                      >
                        <h3 className="text-lg font-semibold">View Analysis Chart</h3>
                        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      
                      {expanded && (
                        <Transition animation="slide-up">
                          <div className="h-[300px] mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={datasets[selectedDataset].chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                                <XAxis 
                                  dataKey="name" 
                                  stroke="#ffffff60"
                                  tick={{ fill: '#ffffff60' }}
                                />
                                <YAxis 
                                  stroke="#ffffff60"
                                  tick={{ fill: '#ffffff60' }}
                                />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: '#000000dd',
                                    border: '1px solid #ffffff20',
                                    borderRadius: '8px'
                                  }}
                                />
                                <Line 
                                  type="monotone" 
                                  dataKey="value" 
                                  stroke="#4ade80" 
                                  strokeWidth={2}
                                  dot={{ fill: '#4ade80' }}
                                  activeDot={{ r: 8 }}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </Transition>
                      )}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                      <div className="space-y-2">
                        {datasets[selectedDataset].recommendations.map((rec, index) => (
                          <Transition key={index} animation="slide-up" delay={index * 200}>
                            <div className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">→</span>
                              <p className="text-gray-300">{rec}</p>
                            </div>
                          </Transition>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalysis; 