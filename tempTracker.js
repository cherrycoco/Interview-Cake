class TempTracker {
  constructor () {
    this.min = null;
    this.max = null;
    this.modeArr = new Array(111);
    modeArr.fill(0);
    this.maxOccurrence = 0;
    this.modeTemp = null; 
    this.total = 0;
    this.length = 0;
  }

  insert (value) {
    if (this.min === null || value < this.min) {
      this.min = value;
    }

    if (this.max === null || value > this.max) {
      this.max = value; 
    }

    this.modeArr[value]++;
    if (this.modeArr[value] > this.maxOccurrence) {
      this.maxOccurrence = this.modeArr[value];
      this.modeTemp = value; 
    }

    this.total += value;
    this.length++;
  }

  getMin () {
    return this.min;
  }

  getMax () {
    return this.max;
  }

  getMean () {
    return this.total/this.length;
  }

  getMode () {
    return this.modeTemp;
  }
}