import { ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import CustomizedDot from './CustomizeDot';

type Props = {
  onDotPositionChange: (state: CategoricalChartState) => void;
  dynamicData: any;
};

const Chart: React.FC<Props> = ({ onDotPositionChange, dynamicData }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={dynamicData} margin={{ left: 0, right: 0 }} onClick={onDotPositionChange}>
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
    </>
  );
};

export default Chart;
