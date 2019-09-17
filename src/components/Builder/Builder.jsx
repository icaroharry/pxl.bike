import React, { useState, useEffect, useCallback } from "react";
import { TwitterPicker, ChromePicker } from "react-color";

import AlternativePartPicker from "./AlternativePartPicker";
import Header from "./Header";
import pixels, {
  calcPixelSize,
  wheelAlternatives,
  handleBarAlternatives
} from "../../utils/pixels";
import { isObject, getRandomColor } from "../../utils/utils";

const Builder = () => {
  const [pixelSize, setPixelSize] = useState(calcPixelSize(window.innerWidth));
  const [selectedPart, setSelectedPart] = useState("frame");

  const randomizeParts = () => ({
    handleBar:
      handleBarAlternatives[(handleBarAlternatives.length * Math.random()) | 0],
    frontRim: wheelAlternatives[(wheelAlternatives.length * Math.random()) | 0],
    backRim: wheelAlternatives[(wheelAlternatives.length * Math.random()) | 0]
  });

  const [alternativePart, setAlternativePart] = useState(randomizeParts());

  const randomizeColors = () => ({
    saddle: getRandomColor(),
    seatPost: getRandomColor(),
    frame: getRandomColor(),
    fork: getRandomColor(),
    frontWheel: "#333",
    frontRim: "#000",
    backWheel: "#333",
    backRim: "#000",
    chainRing: "#333",
    crankSet: "#000",
    pedal: "#333",
    handleBar: getRandomColor()
  });

  const [colors, setColors] = useState(randomizeColors());

  const getSize = () => {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth
    };
  };

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(getSize()));
    return () => {
      window.removeEventListener("resize", () => setWindowSize(getSize()));
    };
  }, []);

  useEffect(() => {
    setPixelSize(calcPixelSize(windowSize.innerWidth));
  }, [windowSize.innerWidth, setPixelSize]);

  const handleClickOnBike = useCallback(
    event => {
      const canvas = document.getElementById("bike");
      const elemLeft = canvas.offsetLeft;
      const elemTop = canvas.offsetTop;

      const xVal = event.pageX - elemLeft;
      const yVal = event.pageY - elemTop;

      console.log(event.pageX, event.pageY, elemLeft, elemTop);
      Object.keys(pixels).find(part => {
        let partToDraw = pixels[part];
        if (isObject(pixels[part])) {
          partToDraw = pixels[part][alternativePart[part]];
        }

        const found = partToDraw.find(pixel => {
          return (
            JSON.stringify(pixel) ===
            JSON.stringify([
              Math.floor(xVal / pixelSize),
              Math.floor(yVal / pixelSize)
            ])
          );
        });

        if (found) {
          return setSelectedPart(part);
        }
      });
    },
    [alternativePart, pixelSize]
  );

  useEffect(() => {
    const canvas = document.getElementById("bike");
    canvas.removeEventListener("click", handleClickOnBike, false);
    canvas.addEventListener("click", handleClickOnBike, false);
  }, [alternativePart, pixelSize, handleClickOnBike]);

  const drawBike = useCallback(
    (canvas, pSize) => {
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
            ctx.fillRect(pixel[0] * pSize, pixel[1] * pSize, pSize, pSize);
          });
        });
      }
    },
    [alternativePart, colors]
  );

  useEffect(() => {
    const canvas = document.getElementById("bike");
    drawBike(canvas, pixelSize);
  }, [colors, alternativePart, pixelSize, drawBike]);

  const clearAlternativePart = () => {
    const canvas = document.getElementById("bike");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (isObject(pixels[selectedPart])) {
        pixels[selectedPart][alternativePart[selectedPart]].forEach(pixel => {
          ctx.clearRect(
            pixel[0] * pixelSize,
            pixel[1] * pixelSize,
            pixelSize,
            pixelSize
          );
        });
      }
    }
  };

  const selectAlternative = part => {
    clearAlternativePart();
    setAlternativePart({ ...alternativePart, ...part });
  };

  /* Canvas Donwload */
  const download = async () => {
    const originalCanvas = document.getElementById("bike");
    const canvas = document.createElement("canvas");
    canvas.width = originalCanvas.width * 16;
    canvas.height = originalCanvas.height * 16;
    drawBike(canvas, pixelSize * 16);
    const lnk = document.createElement("a");
    let e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = "bike-pixel";

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    // const res = await axios.post('https://us-central1-bikepixel.cloudfunctions.net/sendBikePixelOnEmail');
    // console.log(res);

    /// create a 'fake' click-event to trigger the download
    if (document.createEvent) {
      e = document.createEvent("MouseEvents");
      e.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );

      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent("onclick");
    }
  };

  return (
    <div className="container mx-auto w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl flex-col">
      <Header
        color={colors.frame}
        handleDownload={download}
        handleRandomize={() =>
          setAlternativePart(randomizeParts()) || setColors(randomizeColors())
        }
      />
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-1/5 mr-0 sm:mr-3 xs:mt-0 sm:mt-0 md:mt-0 lg:mt-3 xl:mt-3">
          {isObject(pixels[selectedPart]) && (
            <AlternativePartPicker
              part={selectedPart}
              selectAlternative={selectAlternative}
              pixelSize={pixelSize}
            />
          )}
        </div>
        <div className="w-full sm:w-3/5">
          <div className="flex justify-center w-full p-5 bg-white my-3 rounded shadow-lg">
            {/* 464 x 320 */}
            <canvas id="bike" width={pixelSize * 29} height={pixelSize * 20} />
          </div>
          <TwitterPicker
            className="my-3 mx-auto min-w-full"
            color={colors[selectedPart]}
            colors={Array.from(new Set(Object.values(colors)))}
            onChange={color => {
              setColors({ ...colors, [selectedPart]: color.hex });
            }}
          />
          <ChromePicker
            disableAlpha
            className="my-3 mx-auto min-w-full"
            color={colors[selectedPart]}
            onChange={color => {
              setColors({ ...colors, [selectedPart]: color.hex });
            }}
          />
        </div>
        <div className="w-full sm:w-1/5 ml-0 sm:ml-3" />
      </div>
    </div>
  );
};

export default Builder;
