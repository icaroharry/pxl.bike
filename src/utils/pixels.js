const pixels = {
  saddle: [
    [6, 0], [7, 0], [8, 0], [9, 0]
  ],
  seatPost: [
    [7, 1],
    [7, 2],
    [8, 3],
    [8, 4]
  ],
  frontWheel: [
    [22, 9], [23, 9], [24, 9], [25, 9], 
    [20, 10], [26, 10],
    [19, 11], [27, 11],
    [18, 12], [28, 12],
    [18, 13], [28, 13],
    [18, 14], [28, 14],
    [18, 15], [28, 15],
    [18, 16], [28, 16],
    [19, 17], [27, 17],
    [20, 18], [26, 18],
    [21, 19], [22, 19], [23, 19], [24, 19], [25, 19],
  ],
  frontRim: {
    default: [
      [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], 
      [20, 11], [26, 11],
      [19, 12], [27, 12],
      [19, 13], [27, 13],
      [19, 14], [27, 14],
      [19, 15], [27, 15],
      [19, 16], [27, 16],
      [20, 17], [26, 17],
      [21, 18], [22, 18], [23, 18], [24, 18], [25, 18], 
    ],
    large: [
      [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], 
      [20, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11], [26, 11],
      [19, 12], [20, 12], [21, 12], [25, 12], [26, 12], [27, 12],
      [19, 13], [20, 13], [26, 13], [27, 13],
      [19, 14], [20, 14], [26, 14], [27, 14],
      [19, 15], [20, 15], [26, 15], [27, 15],
      [19, 16], [20, 16], [21, 16], [25, 16], [26, 16], [27, 16],
      [20, 17], [21, 17], [22, 17], [23, 17], [24, 17], [25, 17], [26, 17],
      [21, 18], [22, 18], [23, 18], [24, 18], [25, 18], 
    ],
    full: [
      [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], 
      [20, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11], [26, 11],
      [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12], [25, 12], [26, 12], [27, 12],
      [19, 13], [20, 13], [21, 13], [22, 13], [23, 13], [24, 13], [25, 13], [26, 13], [27, 13],
      [19, 14], [20, 14], [21, 14], [22, 14], [24, 14], [25, 14], [26, 14], [27, 14],
      [19, 15], [20, 15], [21, 15], [22, 15], [23, 15], [24, 15], [25, 15], [26, 15], [27, 15],
      [19, 16], [20, 16], [21, 16], [22, 16], [23, 16], [24, 16], [25, 16], [26, 16], [27, 16],
      [20, 17], [21, 17], [22, 17], [23, 17], [24, 17], [25, 17], [26, 17],
      [21, 18], [22, 18], [23, 18], [24, 18], [25, 18], 
    ],
    threeSpoke: [
      [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], 
      [20, 11], [23, 11], [26, 11],
      [19, 12], [23, 12], [27, 12],
      [19, 13], [23, 13], [27, 13],
      [19, 14], [22, 14], [24, 14],  [27, 14],
      [19, 15], [21, 15], [22, 15], [24, 15], [25, 15], [27, 15],
      [19, 16], [20, 16], [21, 16], [25, 16], [26, 16], [27, 16],
      [20, 17], [26, 17],
      [21, 18], [22, 18], [23, 18], [24, 18], [25, 18],
    ],
    fourSpoke: [
      [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], 
      [20, 11], [21, 11], [25, 11], [26, 11],
      [19, 12], [21, 12], [22, 12], [24, 12], [25, 12], [27, 12],
      [19, 13], [22, 13], [24, 13], [27, 13],
      [19, 14], [27, 14],
      [19, 15], [21, 15], [22, 15], [24, 15], [25, 15], [27, 15],
      [19, 16], [20, 16], [21, 16], [25, 16], [26, 16], [27, 16],
      [20, 17], [26, 17],
      [21, 18], [22, 18], [23, 18], [24, 18], [25, 18],
    ]
  },
  backWheel: [
    [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], 
    [2, 10], [8, 10],
    [1, 11], [9, 11],
    [0, 12], [10, 12],
    [0, 13], [10, 13],
    [0, 14], [10, 14],
    [0, 15],
    [0, 16], [10, 16],
    [1, 17], [9, 17],
    [2, 18], [8, 18],
    [3, 19], [4, 19], [5, 19], [6, 19], [7, 19], 
  ],
  backRim:  {
    default: [
      [3, 10], [4, 10], [5, 10], [6, 10], [7, 10],
      [2, 11], [8, 11],
      [1, 12], [9, 12],
      [1, 13], [9, 13],
      [1, 14], [9, 14],
      [1, 15], [9, 15],
      [1, 16], [9, 16],
      [2, 17], [8, 17],
      [3, 18], [4, 18], [5, 18], [6, 18], [7, 18], 
    ],
    large: [
      [3, 10], [4, 10], [5, 10], [6, 10], [7, 10],  
      [2, 11], [3, 11], [4, 11], [5, 11], [7, 11], [6, 11], [8, 11],
      [1, 12], [2, 12], [3, 12], [7, 12], [8, 12], [9, 12],
      [1, 13], [2, 13], [8, 13], [9, 13],
      [1, 14], [2, 14], [8, 14], [9, 14],
      [1, 15], [2, 15], [8, 15], [9, 15],
      [1, 16], [2, 16], [3, 16], [7, 16], [8, 16], [9, 16],
      [2, 17], [3, 17], [4, 17], [5, 17], [6, 17], [7, 17], [8, 17],
      [3, 18], [4, 18], [5, 18], [6, 18], [7, 18], 
    ],
    full: [
      [3, 10], [4, 10], [5, 10], [6, 10], [7, 10],  
      [2, 11], [3, 11], [4, 11], [5, 11], [6, 11], [7, 11], [8, 11],
      [1, 12], [2, 12], [3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12],
      [1, 13], [2, 13], [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13],
      [1, 14], [2, 14], [3, 14], [3, 14], [4, 14], [6, 14], [7, 14], [8, 14], [9, 14],
      [1, 15], [2, 15], [3, 15], [3, 15], [4, 15], [5, 15], [6, 15], [7, 15], [8, 15], [9, 15],
      [1, 16], [2, 16], [3, 16], [3, 16], [4, 16], [5, 16], [6, 16], [7, 16], [8, 16], [9, 16],
      [2, 17], [3, 17], [3, 17], [4, 17], [5, 17], [6, 17], [7, 17], [8, 17],
      [3, 18], [3, 18], [4, 18], [5, 18], [6, 18],  [7, 18],
    ],
    threeSpoke: [
      [3, 10], [4, 10], [5, 10], [6, 10], [7, 10],  
      [2, 11], [5, 11], [8, 11],
      [1, 12], [5, 12], [9, 12],
      [1, 13], [5, 13], [9, 13],
      [1, 14], [4, 14], [6, 14], [9, 14],
      [1, 15], [3, 15], [4, 15], [6, 15], [7, 15], [9, 15],
      [1, 16], [2, 16], [3, 16], [7, 16], [8, 16], [9, 16],
      [2, 17], [8, 17],
      [3, 18], [4, 18], [5, 18], [6, 18], [7, 18],
    ],
    fourSpoke: [
      [3, 10], [4, 10], [5, 10], [6, 10], [7, 10],
      [2, 11], [3, 11], [7, 11], [8, 11],
      [1, 12], [3, 12], [4, 12], [6, 12], [7, 12], [9, 12],
      [1, 13], [4, 13], [6, 13], [9, 13],
      [1, 14], [9, 14],
      [1, 15], [3, 15], [4, 15], [6, 15], [7, 15], [9, 15],
      [1, 16], [2, 16], [3, 16], [7, 16], [8, 16], [9, 16],
      [2, 17], [8, 17],
      [3, 18], [4, 18], [5, 18], [6, 18], [7, 18],
    ]
  },
  chainRing: [
    [12, 14], [13, 14], [14, 14],
    [12, 15], [14, 15],
    [12, 16], [13, 16], [14, 16],
  ],
  crankSet: [
    [13, 17]
  ],
  pedal: [
    [12, 18], [13, 18], [14, 18] 
  ],
  handleBar: {
    drop: [
      [21, 4], [22, 4], [23, 4], [24, 4],
      [25, 5], [25, 6],
      [23, 7], [24, 7]
    ],
    bullHorn: [
      [21, 4], [22, 4], [23, 4], [24, 4],
      [25, 3], [25, 4],
    ],
    pursuit: [
      [21, 4], [22, 4], [23, 4],
      [23, 5], [24, 5], [25, 5],
    ]
  },
  fork: [
    [21, 9],
    [21, 10],
    [22, 11],
    [22, 12],
    [23, 13],
    [23, 14],
  ],
  frame: [
    [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [17, 5], [18, 5], [19, 5], [20, 5],
    [9, 6], [20, 6], 
    [9, 7], [20, 7], 
    [8, 8], [10, 8], [19, 8], [20, 8],
    [8, 9], [10, 9], [18, 9], [19, 9],
    [7, 10], [11, 10], [17, 10], [18, 10],
    [7, 11], [11, 11], [16, 11], [17, 11],
    [6, 12], [12, 12], [15, 12], [16, 12],
    [6, 13], [12, 13], [14, 13], [15, 13],
    [5, 14], [6, 14], [7, 14], [8, 14],
    [9, 15], [10, 15], [11, 15], [13, 15],
  ],
}

export const trimPixels = (part) => {
  let smallerX = Infinity;
  let smallerY = Infinity;
  part.forEach(pixel => {
    if (pixel[0] < smallerX) {
      smallerX = pixel[0]
    }
    if (pixel[1] < smallerY) {
      smallerY = pixel[1]
    }
  });

  return part.map(pixel => ([pixel[0] - smallerX, pixel[1] - smallerY]))
}

export const getDimensions = (part, pixelSize) => {
  let x = 0;
  let y = 0;

  trimPixels(part).forEach(pixel => {
    if (pixel[0] > x) {
      x = pixel[0]
    }
    if (pixel[1] > y) {
      y = pixel[1]
    }
  })

  return [(x + 1) * pixelSize, (y + 1) * pixelSize];
}

export const calcPixelSize = (size) => {
  if(size <= 640){
    // height 320 = 10.344
    return 9;
  } else if(size > 640 && size <= 768){
    // height 345 = 11.206
    return 11;
  } else if(size > 768 && size <= 1024){
    // heigth 384 = 12.551
    return 12;
  } else if(size > 1024 && size <= 1280){
    // height 460.8 = 15.2
    return 15;
  } else if(size > 1280){
    // height 614.39 = 20.496
    return 20;
  }
};

export const wheelAlternatives = ["default", "large", "full", "threeSpoke", "fourSpoke"];
export const handleBarAlternatives = ["pursuit", "drop", "bullHorn"];

export default pixels;
