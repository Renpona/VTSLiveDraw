import sinon from 'sinon';
import ImageData from '../mocks/ImageData.mock';
import * as initialStateOriginal from '../../src/reducers/frames/initialState';

export const framesOrderInitialState = sinon.stub(initialStateOriginal, 'framesOrderInitialState', () => ({
  // store order of frames presented in gif; stored by unique id
  framesOrderArray: 'frame_0',
  // keep track of all changed frames on each iteration, to generate just a part of new gif data array
  // all elements are sorted by position in framesOrderArray; stored as {el: <index in framesOrderArray>}
  modifiedFramesArray: [{frame_0: 0}]
}));

export const framesCollectionInitialState = sinon.stub(initialStateOriginal, 'framesCollectionInitialState', () => ({
  frame_0: {
    name: `default_0`,
    naturalImageData: new ImageData(32, 32)
  }
}));

export const framesActivityInitialState = sinon.stub(initialStateOriginal, 'framesActivityInitialState', () => ({
  activeFrame: 'frame_0',
  fps: 2,
  // gather all data generated by gif encoder for all frames according to frames order
  framesGifData: {}
}));
