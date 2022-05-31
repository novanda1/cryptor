import useToggleGroup from '@/components/ToggleGroup';
import useChart from '@/hooks/useChart';
import { FormatedChartData } from '@/types/chart';
import { CurrentPosition } from '@/types/position';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import Chart from './Chart';
import ChartDotInfo from './ChartDotInfo';

type ToggleTypeAndData = {
  days: string;
};

type ToggleTypeAndDataMap = ToggleTypeAndData[];

type Props = {
  data: ToggleTypeAndDataMap;
  heading?: React.ReactNode;
  coinName: string;
};

const ChartLayout: React.FC<Props> = ({ data, heading, coinName }) => {
  const { ToggleGroup, active } = useToggleGroup({ types: data.map(d => +d.days) });
  const {
    data: bitcoinData,
    isError,
    isLoading,
  } = useChart(coinName, {
    vs_currency: 'usd',
    days: active + '',
    interval: active < 7 ? 'hourly' : active > 30 ? 'monthly' : 'daily',
  });

  const [formatedChartData, setFormatedChartData] = useState<FormatedChartData[]>();

  const [current, setCurrent] = useState<CurrentPosition>({ isUp: true, percent: 10, value: 100 });

  const onDotPositionChange = (state: CategoricalChartState) => {
    const value = state.activePayload[0].payload;

    setCurrent({ value: value.price, isUp: false, percent: 13, unix: value.unix });
  };

  useEffect(() => {
    if (bitcoinData) {
      const format: FormatedChartData[] = [];
      console.log('active', active);

      bitcoinData.prices?.forEach(price => {
        return format.push({ unix: price[0], price: price[1] });
      });

      setFormatedChartData(format);
    }
  }, [bitcoinData, active]);

  return (
    <>
      <div
        className="pt-10 pb-16 bg-gray-800 text-white flex flex-col items-center justify-center"
        style={{ marginTop: 'var(--safe-area-top)', marginBottom: 100 }}
      >
        {heading}

        {!isLoading && !isError && formatedChartData && (
          <Chart data={formatedChartData} onDotPositionChange={onDotPositionChange} />
        )}
        <ToggleGroup />
        <ChartDotInfo current={current} />
      </div>
    </>
  );
};

export default ChartLayout;
