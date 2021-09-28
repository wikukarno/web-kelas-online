import React from "react";
import Youtube from "react-youtube";
import Accordion, { IconLock, IconPlay, Item } from "src/components/Accordion";
import Modal from "src/components/Modal";
export default function RenderPreview({ previews }) {
  return (
    <div className='accordion'>
      <Accordion>
        {(Active, toggle) => {
          return previews?.map((item, index) => {
            <Item id={item.id}></Item>;
          });
        }}
      </Accordion>
    </div>
  );
}
