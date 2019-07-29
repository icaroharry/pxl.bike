import React, { useRef, useEffect, createRef, useState } from 'react';

import pixels, { trimPixels, getDimensions } from '../../common/pixels';
import { isObject } from '../../common/utils';


const AlternativePartPicker = ({ part, selectAlternative, pixelSize }) => {
  const refs = useRef([]);
  const [squareDimension, setSquareDimension] = useState(0);

  const partsToDraw = isObject(pixels[part]) ? Object.keys(pixels[part]).map((p, i) => {
    refs.current[i] = createRef()
    return (
      <div
        onClick={() => selectAlternative({
          [part]: p
        })}
        className="mx-auto my-2"
        key={i}
        style={{ width: squareDimension, height: squareDimension }}>
          <canvas id={p} ref={refs.current[i]} />
      </div>
    )
  }) : [];

  useEffect(() => {
    Object.keys(pixels[part]).forEach((p, i) => {
      const canvasRef = refs.current[i];
      let canvas = canvasRef && canvasRef.current ? canvasRef.current : null;
      if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");

        const [x, y] = getDimensions(pixels[part][p], pixelSize).map(pixel => Math.floor(pixel / 2))
        console.log(x, y, pixelSize)
        setSquareDimension(x > y ? x : y);
        ctx.canvas.width = x;
        ctx.canvas.height = y;
        
        const s = Math.floor(pixelSize / 2);
        trimPixels(pixels[part][p]).forEach(pixel => {
          ctx.fillStyle = '#000';
          ctx.fillRect(pixel[0] * s, pixel[1] * s, s, s);
        })
      }
    });
  }, [part, squareDimension]);

  return (
    partsToDraw.length > 0 &&
    <div className="flex flex-row sm:flex-col align-middle justify-center p-5 bg-white my-0 sm:my-3 rounded shadow-md">
      {partsToDraw}
    </div>
  )
}

export default AlternativePartPicker;