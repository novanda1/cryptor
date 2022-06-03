import { useEffect, useRef, useState } from 'react';
import useTrending from '../../hooks/useTrending';
import TrendingItems from './TrendingItems';

const HeroLayout: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>();
  const [marginBottom, setMarginBottom] = useState<number>(0);

  const { isError, isLoading, data: trending } = useTrending();

  useEffect(() => {
    setMarginBottom(elementRef.current.clientHeight);
  }, [elementRef, trending]);

  return (
    <>
      <div
        className="relative pt-10 pb-16 bg-gray-900 text-white flex flex-col items-center justify-center"
        style={{ marginTop: 'var(--safe-area-top)', marginBottom: 120 }}
      >
        <h1 className="text-xl font-bold">Hey Novanda!</h1>
        <p className=" text-sm mt-1">You such a great cryptor player</p>

        <div className="mt-10 text-center">
          <span className="text-sm">You have</span>
          <h4 className="mt-1">
            <small className="inline-block transform -translate-y-4 mr-0.5">$</small>
            <span className="text-2xl font-bold">50.000</span>
          </h4>
        </div>
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

export default HeroLayout;
