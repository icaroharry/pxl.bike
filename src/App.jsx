import React, { useState, useEffect } from 'react';
import { TwitterPicker, SliderPicker } from 'react-color';
import * as axios from 'axios';

import AlternativePartPicker from './components/shared/AlternativePartPicker';
import Navbar from './components/shared/Navbar';
import pixels, { PIXEL_SIZE } from './common/pixels';
import { isObject, getRandomColor } from './common/utils';

const App = () => {
  const [pixelSize, setPixelSize] = useState(PIXEL_SIZE);
  const [selectedPart, setSelectedPart] = useState('frame');
  const [showDialog, toggleDialog] = useState(false);
  const [alternativePart, setAlternativePart] = useState({
    handleBar: 'pursuit',
    frontRim: 'default',
    backRim: 'default'
  });

  const [colors, setColors] = useState({
    saddle: getRandomColor(),
    seatPost: getRandomColor(),
    frame: getRandomColor(),
    fork: getRandomColor(),
    frontWheel: '#333',
    frontRim: '#000',
    backWheel: '#333',
    backRim: '#000',
    chainRing: '#333',
    crankSet: '#000',
    pedal: '#333',
    handleBar: getRandomColor(),
  });

  const getSize = () => {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    toggleDialog(true)
    window.addEventListener('resize', () => setWindowSize(getSize()));
    return () => {
      window.removeEventListener('resize', () => setWindowSize(getSize()));
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth + 30 < PIXEL_SIZE * 29) {
      setPixelSize(Math.floor(PIXEL_SIZE * (windowSize.innerWidth - 100) / (PIXEL_SIZE * 29)))
    }
  }, [windowSize]);

  useEffect(() => {
    const canvas = document.getElementById('bike');
    const elemLeft = canvas.offsetLeft;
    const elemTop = canvas.offsetTop;

    canvas.addEventListener('click', (event) => {
      var xVal = event.pageX - elemLeft,
      yVal = event.pageY - elemTop;
      Object.keys(pixels).find(part => {
        let partToDraw = pixels[part];
        if (isObject(pixels[part])) {
          partToDraw = pixels[part][alternativePart[part]];
        }

        const found = partToDraw.find(pixel => {
          return JSON.stringify(pixel) === JSON.stringify([Math.floor(xVal/pixelSize), Math.floor(yVal/pixelSize)])
        });

        if (found) {
          return setSelectedPart(part);
        }
      })
    }, false);
  }, [alternativePart, pixelSize]);

  useEffect(() => {
    const canvas = document.getElementById('bike');
    drawBike(canvas, pixelSize);
  }, [colors, alternativePart, pixelSize]);

  const drawBike = (canvas, pixelSize) => {
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Object.keys(pixels).forEach(part => {
        let partToDraw = pixels[part];
        if (isObject(pixels[part])) {
          partToDraw = pixels[part][alternativePart[part]];
        }
        partToDraw.forEach(pixel => {
          ctx.fillStyle = colors[part];
          ctx.fillRect(pixel[0] * pixelSize, pixel[1] * pixelSize, pixelSize, pixelSize);
        })
      })
    };
  };

  const clearAlternativePart = () => {
    const canvas = document.getElementById('bike');
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (isObject(pixels[selectedPart])) {
        pixels[selectedPart][alternativePart[selectedPart]].forEach(pixel => {
          ctx.clearRect(pixel[0] * pixelSize, pixel[1] * pixelSize, pixelSize, pixelSize);
        })
      }
    }
  };

  const selectAlternative = (part) => {
    clearAlternativePart();
    setAlternativePart({ ...alternativePart, ...part });
  };

  /* Canvas Donwload */
  const download = async () => {
    const originalCanvas = document.getElementById('bike');
    const canvas = document.createElement('canvas');
    canvas.width = originalCanvas.width * 4;
    canvas.height = originalCanvas.height * 4;
    drawBike(canvas, pixelSize * 4);
    const lnk = document.createElement('a')
    let e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = 'bike-pixel';

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL('image/png;base64');

    const res = await axios.post('https://us-central1-bikepixel.cloudfunctions.net/sendBikePixelOnEmail');
    console.log(res);

    /// create a 'fake' click-event to trigger the download
    if (document.createEvent) {
      e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window,
                      0, 0, 0, 0, 0, false, false, false,
                      false, 0, null);

      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent('onclick');
    }
  };

  return (
    <div className="App">
      <Navbar color={colors.frame}/>
      <div className="container mx-auto lg:w-lg xl:w-xl flex-col">
        <div className="flex flex-row justify-center">
          <div className="sm:w-full md:w-1/5"></div>
          <div className="sm:w-full md:w-3/5">
            <div className="flex flex-row">
              <AlternativePartPicker part={selectedPart} selectAlternative={selectAlternative} pixelSize={pixelSize} />
              {/* 464 x 320 */}
              <canvas id="bike" className="bg-white p-5 my-3 rounded shadow-md w-full" width={pixelSize * 29} height={pixelSize * 20}></canvas>
            </div>
            <TwitterPicker
              className="my-3 rounded shadow-md mx-auto min-w-full"
              color={colors[selectedPart]}
              colors={Array.from(new Set(Object.values(colors)))}
              onChange={(color) => {
                setColors({ ...colors, [selectedPart]: color.hex });
              }}
            />
            <SliderPicker
              className="my-3"
              color={colors[selectedPart]}
              onChange={(color) => {
                setColors({ ...colors, [selectedPart]: color.hex });
              }}
            />
          </div>
          <div className="sm:w-full md:w-1/5"></div>
        </div>
        {/* <div className="">
          <button className="download-button" style={{ backgroundColor: colors.frame }} onClick={download}>
            <span className="font-sans" style={{ color: 'white' }}>
              pronto
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
