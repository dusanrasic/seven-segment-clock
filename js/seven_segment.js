
let index = 0;

function SevenSegment(val){
  this.index=val;

  this.getColor = (val, shift) => {
    let r = 255;
    let g = 0;
    let b = 0;
    let a = 40 + 255 * ((val >> shift) & 1);
    return color(r, g, b, a);
  }

  this.sevenSegment = (val) => {
    push();
    noStroke();
    noFill();
    // A
    fill(this.getColor(val, 6));
    rect(60, 20, 78, 18, 10, 10);
    // B
    fill(this.getColor(val, 5));
    rect(140, 40, 18, 98, 10, 10);
    // C
    fill(this.getColor(val, 4));
    rect(140, 160, 18, 98, 10, 10);
    // D
    fill(this.getColor(val, 3));
    rect(60, 260, 78, 18, 10, 10);
    // E
    fill(this.getColor(val, 2));
    rect(40, 160, 18, 98, 10, 10);
    // F
    fill(this.getColor(val, 1));
    rect(40, 40, 18, 98, 10, 10);
    // A
    fill(this.getColor(val, 0));
    rect(60, 140, 78, 18, 10, 10);

    pop();
  }

  this.dots = (val) => {
    push();
    noStroke();
    noFill();
    fill(this.getColor(val, 6));
    rect(-20, 100, 18, 18, 10, 10);

    fill(this.getColor(val, 6));
    rect(-20, 200, 18, 18, 10, 10);
    pop();
  }
}
