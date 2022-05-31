import { CurrentPosition } from '@/types/position';
import dayjs from 'dayjs';

type Props = {
  current: CurrentPosition;
};

const ChartDotInfo: React.FC<Props> = ({ current }) => {
  return (
    <div className="relative w-full h-1 flex justify-center">
      <div
        style={{
          top: 'calc(100% + 30px)',
          boxShadow: 'rgb(0 0 0 / 4%) 0px 3px 20px 7px',
        }}
        className="absolute bg-white text-black rounded-lg right-4 left-4 p-4 overflow-hidden"
      >
        <div className="flex flex-col items-center">
          <span className="block text-2xl font-bold"> ${current.value}</span>
          <div className="font-medium">
            {/* <span>$1.01 (10.06%)</span> */}
            {/* <span className="text-gray-800 ml-2">All Time</span> */}
            <span className="text-gray-800 ml-2">{dayjs(current.unix).format('MMM, D YYYY: HH:mm')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartDotInfo;
