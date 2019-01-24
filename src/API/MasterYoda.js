import _fetch from "./_fetch";

class MasterYoda {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * @type PROMISE
   */
  get(url = this.baseURL) {
    return _fetch(url);
  }
}

export default MasterYoda;
