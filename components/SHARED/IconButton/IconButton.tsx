import React from 'react';
import { Icon } from '@iconify/react';

interface IconButtonProps {
  name: string;
}
export const IconButton: React.FC<IconButtonProps> = ({ name }) => {
  return (
    <Icon
      className="mt-5 cursor-pointer rounded-full "
      icon={name}
      width="20"
    />
  );
};
