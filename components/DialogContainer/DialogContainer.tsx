// DialogContainer.js

import React from 'react';
import { IconProfileNav } from '../IconProfileNav/IconProfileNav';

export const DialogContainer = () => {
  return (
    <div className="flext absolute left-1/2 top-1/2 h-[90vh] w-[80%] -translate-x-1/2 -translate-y-1/2 transform rounded  border-[1px] border-black bg-light-color">
      <IconProfileNav />
    </div>
  );
};
