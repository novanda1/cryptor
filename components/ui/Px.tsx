import React from 'react';

type Props = {
  size: number;
  children?: React.ReactNode;
};

const PX: React.FC<Props> = ({ size, children }) => {
  return <div className={'px-' + size}>{children}</div>;
};

export default PX;
