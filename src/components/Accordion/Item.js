import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
import ArrowDown from "public/images/icon-arrow-down.svg";

export default function item({ name, id, child, active, toggle, children }) {
  return (
    <div className='bg-white border border-gray-300 overflow-hidden'>
      <div className='meta pl-4 py-2 relative flex justify-between item-center'>
        <span className='text-gray-600'>{name}</span>
      </div>
    </div>
  );
}
