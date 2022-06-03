import { useRef, useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const CustomizedDot: React.FC<any> = props => {
  const ref = useRef<SVGTextElement>();
  const { width: screenWidth } = useWindowDimensions();
  const [thisW, setThisW] = useState<number>();
  const { cx, cy, points, value, payload } = props;

  const max = Math.max.apply(
    Math,
    points?.map(d => d.payload.price)
  );
  const min = Math.min.apply(
    Math,
    points?.map(d => d.payload.price)
  );

  const dynamicCx = (): number => {
    if (screenWidth - (cx + thisW) < thisW) {
      return screenWidth - thisW - 3;
    } else if (cx > thisW) return cx - thisW / 2;
    return 2;
  };

  const prices: [] = points.map(p => p.payload.price);
  const maxIndex = prices.indexOf(prices.filter(p => p === max)[0]);
  const minIndex = prices.indexOf(prices.filter(p => p === min)[0]);

  useEffect(() => {
    setThisW(ref.current?.getBoundingClientRect().width);
  }, [ref]);

  if (points.map(p => p.payload).indexOf(payload) === maxIndex) {
    return (
      <>
        <text ref={ref} x={dynamicCx()} y={cy - 10} fill="white" className="text-xs font-bold">
          ${value[1]}
        </text>
      </>
    );
  } else if (points.map(p => p.payload).indexOf(payload) === minIndex) {
    return (
      <text ref={ref} x={cx - 10} y={cy + 20} fill="white" className="text-xs font-bold">
        ${value[1]}
      </text>
    );
  }

  return <></>;
};

export default CustomizedDot;
