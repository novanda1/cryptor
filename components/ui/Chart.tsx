import { FormatedChartData } from '@/types/chart';
import { useTooltipStore } from 'global-stores/useTooltipStore';
import { useEffect } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import CustomizedDot from './CustomizeDot';

function TooltipContent({ payload }: any) {
  const store = useTooltipStore(s => s.setData);

  useEffect(() => {
    payload[0] && store(payload[0].payload);
  }, [payload, store]);

  return <div> </div>;
}

type Props = {
  onDotPositionChange: (state: CategoricalChartState) => void;
  data: FormatedChartData[];
};

const Chart: React.FC<Props> = ({ onDotPositionChange, data }) => {
  const store = useTooltipStore(s => s.setData);

  useEffect(() => {
    store(data[data.length - 1]);

    return () => {
      store();
    };
  }, [data, store]);

  return (
    <>
      <ResponsiveContainer width="99%" height={300}>
        <AreaChart
          data={data}
          margin={{ left: 0, right: 0 }}
          onClick={onDotPositionChange}
          startAngle={3}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={<TooltipContent />} />
          <Area
            onDrag={e => {
              console.log('e', e);
            }}
            type="linear"
            legendType="circle"
            dataKey="price"
            stroke="#fff"
            fillOpacity={1}
            fill="url(#colorPrice)"
            baseLine={9}
            strokeWidth={2.3}
            dot={<CustomizedDot />}
          />
          <YAxis hide domain={['dataMin', 'dataMax']} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
