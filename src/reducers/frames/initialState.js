import { uniqueId } from '../../utils/uuid';

export const defaults = {
  framePrefix: 'frame_',
  frameName: 'default_',
  frameSize: {
    naturalWidth: 32,
    naturalHeight: 32
  }
};

const id = uniqueId(defaults.framePrefix);

export const framesOrderInitialState = () => ({
  // store order of frames presented in gif; stored by unique id
  framesOrderArray: [id],
  // keep track of all changed frames on each iteration, to generate just a part of new gif data array
  // all elements are sorted by position in framesOrderArray; stored as {el: <index in framesOrderArray>}
  modifiedFramesArray: [{[id]: 0}]
});

export const framesCollectionInitialState = (width = defaults.frameSize.naturalWidth, height = defaults.frameSize.naturalHeight) => ({
  [id]: {
    name: `${defaults.frameName}0`,
    naturalImageData: new ImageData(width, height)
  }
});

export const framesActivityInitialState = () => ({
  activeFrame: id,
  fps: 2,
  // gather all data generated by gif encoder for all frames according to frames order
  framesGifData: {}
});
