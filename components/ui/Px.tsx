import React from 'react';

type Props = {
  size: number;
  children?: React.ReactNode;
};

const PX: React.FC<Props> = ({ size, children }) => {
  return <div className={'w-full px-' + size}>{children}</div>;
};

export default PX;
