import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from '../Dragon/Dragon';
// import style from './DragonsView.module.scss';

const DragonsView = () => {
  const dragons = useSelector((state) => state.dragons.list);

  const displayDragons = dragons.map((dragon) => (
    <Dragon
      key={dragon.id}
      id={dragon.id}
      name={dragon.name}
      type={dragon.type}
      img={dragon.img}
      reserved={dragon.reserved}
    />
  ));
  return (
    <section data-testid="dragons-container">{ displayDragons }</section>
  );
};

export default DragonsView;
