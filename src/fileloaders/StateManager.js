import Downloader from './Downloader';
import Uploader from './Uploader';

class StateManager {
  // initial implementation
  // TODO: iData should be converted to Array containing ONLY HEX values
  // without # signs and without commas and then glued together into one string
  // TODO: this all state should be reduced to only important parts for recovering
  prepareBeforeDownload (state) {
    const stateObj = JSON.parse(JSON.stringify(state));

    Object.keys(stateObj.frames.framesCollectionObject)
      .forEach(frameId => {
        let iData = stateObj.frames.framesCollectionObject[frameId].naturalImageData.data;

        // iData from stateObj is now an Object since we used JSON.stringify on TypedArray => convert it to Array
        iData.length = state.frames.framesCollectionObject[frameId].naturalImageData.data.length;
        iData = Array.prototype.slice.call(iData, 0);

        stateObj.frames.framesCollectionObject[frameId].naturalImageData = Array.from(iData);
      });

    return stateObj;
  }

  download (state, fileName) {
    Downloader.asJSON(state, fileName);
  }

  prepareAndDownload (state, fileName) {
    const prepared = this.prepareBeforeDownload(state);
    this.download(prepared, fileName);
  }

  prepareAfterUploadAsync (data) {
    let state = data.json;

    // do something to make state applicable to current store shape

    return Promise.resolve({ file: data.file, json: state });
  }

  // calls calback with { file, json }
  upload (file, callback) {
    Uploader.asJSONAsync(file)
      .then(this.prepareAfterUploadAsync.bind(this))
      .then(callback);
  }
}

export default new StateManager();
