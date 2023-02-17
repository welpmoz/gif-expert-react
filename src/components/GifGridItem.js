import React from 'react'

const GifGridItem = ({id, title, url}) => {
  // console.log(img);
  return (
    <div className='card animate__animated animate__bounce'>
      <img src={url} alt={title} />
      {title}
    </div>
  );
};

export default GifGridItem;