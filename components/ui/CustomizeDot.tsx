import { useRef, useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const CustomizedDot: React.FC<any> = props => {
  const ref = useRef<SVGTextElement>();
  const { width: screenWidth } = useWindowDimensions();
  const [thisW, setThisW] = useState<number>();
  const { cx, cy, stroke, points, value } = props;

  const max = Math.max.apply(
    Math,
    points?.map(d => d.payload.uv)
  );
  const min = Math.min.apply(
    Math,
    points?.map(d => d.payload.uv)
  );

  console.log('props', -thisW - 10);

  const dynamicCx = (): number => {
    if (screenWidth - (cx + thisW) < thisW) {
      return screenWidth - thisW - 3;
    } else if (cx > thisW) return cx - thisW / 2;
    return 2;
  };

  useEffect(() => {
    setThisW(ref.current?.getBoundingClientRect().width);
  }, [ref]);

  if (value[1] === max) {
    return (
      <>
        <text ref={ref} x={dynamicCx()} y={cy - 10} fill="white" className="text-xs font-bold">
          ${value[1]}
        </text>
      </>
    );
  } else if (value[1] === min) {
    return (
      <text ref={ref} x={cx - 10} y={cy + 20} fill="white" className="text-xs font-bold">
        ${value[1]}
      </text>
    );
  }

  return <></>;
};

export default CustomizedDot;
