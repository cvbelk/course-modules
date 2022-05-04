module.exports = class Square { // returned class Square
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width ** 2;
    }
  };