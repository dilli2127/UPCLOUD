import React, { useState } from 'react';
import { CreditCard, Calendar, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import summaryData from '../data/usage_summary.json';
import './UsageSummary.css';

const UsageSummary = () => {
    // Only expand the first year (2026) by default for demo
   const [expandedYears, setExpandedYears] = useState({ 2026: true });

   const toggleYear = (year) => {
      setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }));
   };

  return (
    <div className="usage-summary-page">
      <div className="us-header">
         <div className="us-title">
           <div className="icon-box-purple">
             <CreditCard size={24} color="#7b00ff" />
           </div>
           <h1>Usage summary</h1>
         </div>
      </div>

      <div className="us-year-list">
         {summaryData.map((yearItem) => (
            <div key={yearItem.year} className="us-year-block">
               <div className="us-year-header" onClick={() => toggleYear(yearItem.year)}>
                  <div className="us-year-info">
                     <div className="icon-box-purple small">
                        <Calendar size={18} color="#7b00ff" />
                     </div>
                     <span className="year-text">{yearItem.year}</span>
                  </div>
                  <div className="us-year-chevron">
                     {expandedYears[yearItem.year] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
               </div>

               {expandedYears[yearItem.year] && yearItem.months.length > 0 && (
                  <div className="us-month-list">
                     <div className="month-list-header">
                        <div className="col-month">Month</div>
                        <div className="col-cost">Total cost</div>
                     </div>
                     {yearItem.months.map((month, idx) => (
                        <div key={idx} className="us-month-row">
                           <div className="col-month">
                              <span className="link-purple">{month.name}</span>
                              {month.status === 'Ongoing' && (
                                 <span className="ongoing-badge">
                                    <RefreshCw size={12} /> Ongoing
                                 </span>
                              )}
                           </div>
                           <div className="col-cost cost-val">{month.cost}</div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         ))}
      </div>
    </div>
  );
};

export default UsageSummary;
