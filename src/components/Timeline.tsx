import TimelineStop, { TimelineStopProps } from './TimelineStop';

export interface TimelineProps {
  orientation?: 'horizontal' | 'vertical';
  stops: TimelineStopProps[];
  className?: string;
}

export default function Timeline({
  orientation = 'vertical',
  stops,
  className = '',
}: TimelineProps) {
  const sortedStops = [...stops].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Most recent first
  });

  return (
    <div
      className={`relative ${
        orientation === 'horizontal'
          ? 'flex items-center space-x-8 overflow-x-auto pb-8'
          : 'space-y-8'
      } ${className}`}
    >
      {/* Timeline line */}
      <div
        className={`absolute ${
          orientation === 'horizontal'
            ? 'top-1/2 left-0 right-0 h-0.5 -translate-y-1/2'
            : 'top-0 bottom-0 left-2 w-0.5'
        } bg-gray-200 dark:bg-gray-700`}
      />

      {/* Timeline stops */}
      <div
        className={`relative ${
          orientation === 'horizontal'
            ? 'flex items-center space-x-8'
            : 'space-y-8'
        }`}
      >
        {sortedStops.map((stop, index) => (
          <TimelineStop
            key={`${stop.date}-${index}`}
            {...stop}
            isActive={index === 0} // Most recent stop is active
          />
        ))}
      </div>
    </div>
  );
} 