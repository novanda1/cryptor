import { useEffect, useRef, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import useTrending from '../../hooks/useTrending';
import useToggleGroup from '../ToggleGroup';
import CustomizedDot from './CustomizeDot';
import PX from './Px';

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
    uv: 1000,
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
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page K',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page L',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page M',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page N',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page O',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page P',
    uv: 4490,
    pv: 4300,
    amt: 2100,
  },
];

const dataRandom = () =>
  data.map(d => {
    return {
      ...d,
      uv: Math.round(Math.random() * d.uv),
    };
  });

interface CurrentPosition {
  value: number;
  percent: number;
  isUp: boolean;
}

const PortoLayout: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>();

  const [current, setCurrent] = useState<CurrentPosition>({ isUp: true, percent: 10, value: 100 });

  const { isError, isLoading, trending } = useTrending();

  const [dynamicData, setDynamicData] = useState(data);
  const { ToggleGroup, active } = useToggleGroup({ types: ['1W', '1M', '3M', '1Y', 'ALL'] });

  const onDotPositionChange = (state: CategoricalChartState) => {
    const value = state.activePayload[0].payload.uv;

    setCurrent({ value, isUp: false, percent: 13 });
  };

  useEffect(() => {
    if (active !== '1M') setDynamicData(dataRandom());
    else setDynamicData(data);
  }, [active]);

  return (
    <>
      <div
        className="pt-10 pb-16 bg-gray-800 text-white flex flex-col items-center justify-center"
        style={{ marginTop: 'var(--safe-area-top)', marginBottom: 100 }}
      >
        <h1 className="text-xl font-bold mr-auto mb-20 px-4">My Portfolio</h1>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={dynamicData}
            margin={{ left: 0, right: 0 }}
            onClick={onDotPositionChange}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.2} />
                <stop offset="75%" stopColor="#fff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip content={<div></div>} />
            <Area
              type="linear"
              dataKey="uv"
              stroke="#fff"
              fillOpacity={1}
              fill="url(#colorUv)"
              baseLine={9}
              strokeWidth={2.3}
              dot={<CustomizedDot />}
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="mb-5"></div>
        <PX size={4}>
          <ToggleGroup />
        </PX>

        <div className="relative w-full h-1 flex justify-center">
          <div
            ref={elementRef}
            style={{
              top: 'calc(100% + 30px)',
              boxShadow: 'rgb(0 0 0 / 4%) 0px 3px 20px 7px',
            }}
            className="absolute bg-white text-black rounded-lg right-4 left-4 p-4 overflow-hidden"
          >
            <div className="flex flex-col items-center">
              <span className="block text-2xl font-bold"> ${current.value}</span>
              <div className="font-medium">
                <span>$1.01 (10.06%)</span>
                <span className="text-gray-800 ml-2">All Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortoLayout;
