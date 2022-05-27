import { useEffect, useRef, useState } from 'react';
import {
  Area,
  AreaChart, ResponsiveContainer,
  Tooltip
} from 'recharts';
import useTrending from '../../hooks/useTrending';
import TrendingItems from './TrendingItems';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 3410,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 90,
    pv: 4300,
    amt: 2100,
  },
];

const PortoLayout: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>();
  const [marginBottom, setMarginBottom] = useState<number>(0);

  const { isError, isLoading, trending } = useTrending();

  useEffect(() => {
    setMarginBottom(elementRef.current.clientHeight);
  }, [elementRef, trending]);

  return (
    <>
      <div
        className="pt-10 pb-16 bg-gray-900 text-white flex flex-col items-center justify-center"
        style={{ marginTop: 'var(--safe-area-top)', marginBottom }}
      >
        <h1 className='text-xl font-bold'>My Portofolio</h1>
        <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{left:-5, right:-5}}
        >
          <defs>
            <linearGradient  id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.2} />
              <stop offset="45%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#fff"
            fillOpacity={1}
            fill="url(#colorUv)"
            baseLine={9}
          />
         
        </AreaChart>
        </ResponsiveContainer>

        <div className="relative w-full h-1 flex justify-center">
          <div
            ref={elementRef}
            style={{
              top: 'calc(100% + 30px)',
              boxShadow: 'rgb(0 0 0 / 4%) 0px 3px 20px 7px',
            }}
            className="absolute bg-white text-black rounded-lg right-4 left-4 p-4 overflow-hidden"
          >
            <h2 className="text-lg font-medium">Trending</h2>

            <div className="flex justify-between mt-4">
              <TrendingItems trending={trending} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortoLayout;
