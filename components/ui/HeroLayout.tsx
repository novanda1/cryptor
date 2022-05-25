import { useEffect, useRef, useState } from 'react';
import useTrending from '../../hooks/useTrending';
import TrendingItems from './TrendingItems';

const HeroLayout: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>();
  const [marginBottom, setMarginBottom] = useState<number>(0);

  const { isError, isLoading, trending } = useTrending();

  useEffect(() => {
    setMarginBottom(elementRef.current.clientHeight + 20);
  }, [elementRef, trending]);

  return (
    <>
      <div
        className="relative pt-10 pb-16 bg-gray-900 flex flex-col items-center justify-center"
        style={{ marginTop: 'var(--safe-area-top)', marginBottom }}
      >
        <h1 className="text-xl font-bold">Hey Novanda!</h1>
        <p className=" text-xs mt-1">Ready to be a Cryptor?</p>

        <div className="mt-10 text-center">
          <span className="text-sm">You have</span>
          <h4 className="mt-1">
            <small className="inline-block transform -translate-y-4 mr-0.5">Rp</small>
            <span className="text-2xl font-bold">500.000</span>
          </h4>
        </div>
        <div className="relative w-screen h-1 flex justify-center">
          <div
            ref={elementRef}
            style={{ top: 'calc(100% + 47px)' }}
            className="absolute bg-white text-black rounded-lg w-4/5 p-3 overflow-hidden"
          >
            <h2 className="font-bold text-sm">Trending</h2>

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
