'use client';
import React, { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { Minus, Plus } from 'lucide-react';

type Props = {
  className?: string;
};

export const Counter: FC<Props> = ({ className }) => {
    const [count, setCount] = useState(1);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : 1);
  return (
    <div className={cn('flex items-center gap-x-4', className)}>
        <Button onClick={decrement} variant='outline' size='icon' type='button'>
            <Minus className='h-4 w-4 text-primary'/>
        </Button>
        <p className='font-medium text-lg'>{count}</p>
        <Button onClick={increment} variant='outline' size='icon' type='button'>
            <Plus className='h-4 w-4 text-primary'/>
        </Button>
    </div>
  );
};