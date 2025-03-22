import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons';


const MetricCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  iconBg, 
  iconColor, 
  negative, 
  isNew, 
  subtext,
  valueColor 
}) => {
  return (
    <div className="card p-4 metric-card">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className={`text-2xl font-bold ${valueColor || ''}`}>{value}</h2>
        </div>
        <div className={`${iconBg} p-2 rounded-md`}>
          <FontAwesomeIcon icon={icon} className={iconColor} />
        </div>
      </div>
      {(change || isNew || subtext) && (
        <div className="mt-2 flex items-center text-sm">
          {change && (
            <>
              <span className={`${negative ? 'text-red-500' : 'text-green-500'} font-medium flex items-center`}>
                <FontAwesomeIcon icon={faArrowUp} className="mr-1" /> {change}%
              </span>
              <span className="text-gray-400 ml-2">vs last week</span>
            </>
          )}
          {isNew && (
            <span className="text-green-500 font-medium flex items-center">
              <FontAwesomeIcon icon={faPlus} className="mr-1" /> {change}
              <span className="text-gray-400 ml-2">new this week</span>
            </span>
          )}
          {subtext && (
            <span className="text-amber-500 font-medium">{subtext}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
