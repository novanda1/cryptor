import useToggleGroup from '@/components/ToggleGroup';
import { CurrentPosition } from '@/types/position';
import { useEffect, useState } from 'react';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import Chart from './Chart';
import ChartDotInfo from './ChartDotInfo';

type ToggleTypeAndData = {
  type: string;
  data: any;
};

type ToggleTypeAndDataMap = ToggleTypeAndData[];

type Props = {
  data: ToggleTypeAndDataMap;
  heading?: React.ReactNode;
};

const ChartLayout: React.FC<Props> = ({ data, heading }) => {
  const [current, setCurrent] = useState<CurrentPosition>({ isUp: true, percent: 10, value: 100 });

  const [dynamicData, setDynamicData] = useState(data[0].data);
  const { ToggleGroup, active } = useToggleGroup({ types: data.map(d => d.type) });

  const onDotPositionChange = (state: CategoricalChartState) => {
    const value = state.activePayload[0].payload.uv;

    setCurrent({ value, isUp: false, percent: 13 });
  };

  useEffect(() => {
    setDynamicData(data.filter(d => d.type === active)[0].data);
  }, [active, data]);

  return (
    <>
      <div
        className="pt-10 pb-16 bg-gray-800 text-white flex flex-col items-center justify-center"
        style={{ marginTop: 'var(--safe-area-top)', marginBottom: 100 }}
      >
        {heading}
        <Chart dynamicData={dynamicData} onDotPositionChange={onDotPositionChange} />
        <ToggleGroup />
        <ChartDotInfo current={current} />
      </div>
    </>
  );
};

export default ChartLayout;
