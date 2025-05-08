import { ReactNode } from 'react';

export interface TimelineStopProps {
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
  isActive?: boolean;
}

export default function TimelineStop({
  date,
  title,
  description,
  icon,
  isActive = false,
}: TimelineStopProps) {
  return (
    <div className="relative flex items-start group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-0 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${
          isActive ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
        } transition-colors duration-200`}
      />
      
      {/* Content */}
      <div className="ml-8">
        <div className="flex items-center gap-2">
          {icon && <div className="text-blue-600 dark:text-blue-400">{icon}</div>}
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {date}
          </span>
        </div>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
} 