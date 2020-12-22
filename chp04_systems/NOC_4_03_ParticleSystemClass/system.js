// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  // Higher order version of run()
  // run() {
  //   // Run every particle
  //   // ES6 for..of loop
  //   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  //   // https://www.youtube.com/watch?v=Y8sMnRQYr3c
  //   for (let particle of this.particles) {
  //     particle.run();
  //   }

  //   // Filter removes any elements of the array that do not pass the test
  //   // I am also using ES6 arrow snytax
  //   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  //   // https://www.youtube.com/watch?v=mrYMzpbFz18
  //   this.particles = this.particles.filter(particle => !particle.isDead());

  //   // Without ES6 arrow code would look like:
  //   // this.particles = this.particles.filter(function(particle) {
  //   //   return !particle.isDead();
  //   // });
  // }
}