import React, { FC } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const MapFilterItems: FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
    </div>
  );
};