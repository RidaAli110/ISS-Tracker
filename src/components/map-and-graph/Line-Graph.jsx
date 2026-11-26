import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '00:00', altitude: 418 },
  { time: '00:05', altitude: 419 },
  { time: '00:10', altitude: 417 },
  { time: '00:15', altitude: 420 },
  { time: '00:20', altitude: 418 },
  { time: '00:25', altitude: 421 },
];

export default function AltitudeGraph() {
  return (
    <section
      className='w-full h-75 mt-8 min-[600px]:mt-10'
      aria-labelledby='Altitude-graph-heading'
    >
      <h3
        id='Altitude-graph-heading'
        className='mb-4 flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-(--text)'
      >
        <span className=' dot h-2 w-2 rounded-full bg-(--accent-blue)'></span>
        ISS Altitude
      </h3>

      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' stroke='var(--border-color)' />

          <XAxis dataKey='time' stroke='var(--text-2)' />

          <YAxis
            domain={['dataMin - 5', 'dataMax + 5']}
            stroke='var(--text-2)'
            unit=' km'
          />

          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--bg-2)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.4rem',
              color: 'var(--icon-active)',
              padding: '0.7rem 0.8rem',
            }}
          />

          <Line
            type='monotone'
            dataKey='altitude'
            stroke='white'
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
