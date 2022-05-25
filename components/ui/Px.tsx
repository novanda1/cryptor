import React from 'react';

type Props = {
  size: number;
  children?: React.ReactNode;
};

const Px: React.FC<Props> = ({ size, children }) => {
  return <div className={'px-' + size}>{children}</div>;
};

export default Px;
