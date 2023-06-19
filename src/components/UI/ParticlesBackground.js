import React, { useEffect } from "react";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  let w, h, loopId, canvas, ctx, particles, id;

  const options = {
    particleColor: "rgba(255, 255, 255, 1)",
    lineColor: "rgba(0, 181, 255)",
    particleAmount: 50,
    defaultRadius: 3,
    variantRadius: 2,
    defaultSpeed: 1,
    variantSpeed: 1.2,
    linkRadius: 100,
  };

  const rgb = options.lineColor.match(/\d+/g);

  useEffect(() => {
    init();
    function init() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      resizeReset();
      initializeElements();
      startAnimation();
    }
  });

  function resizeReset() {
    w = canvas.width = window.innerHeight;
    h = canvas.height = window.innerWidth;
  }

  function initializeElements() {
    particles = [];
    for (let i = 0; i < options.particleAmount; i++) {
      particles.push(new Particle());
    }
  }

  function startAnimation() {
    loopId = requestAnimationFrame(animationLoop);
  }

  function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();

    id = requestAnimationFrame(animationLoop);
  }

  function drawScene() {
    drawLine();
    drawParticle();
  }

  function drawParticle() {
    for (let i = 0; i < options.particleAmount; i++) {
      particles[i].update();
      particles[i].draw();
    }
  }

  function drawLine() {
    for (let i = 0; i < particles.length - 1; i++) {
      linkPoints(particles[i], particles);
    }
  }

  function linkPoints(point, hubs) {
    for (let i = 0; i < hubs.length; i++) {
      const distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
      const opacity = 1 - distance / options.linkRadius;
      if (opacity > 0) {
        ctx.lineWidth = 0.5;
        ctx.strokeStyle =
          "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(hubs[i].x, hubs[i].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  function checkDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  const Particle = function () {
    const _this = this;

    _this.x = Math.random() * w;
    _this.y = Math.random() * h;
    _this.color = options.particleColor;
    _this.radius =
      options.defaultRadius + Math.random() * options.variantRadius;
    _this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
    _this.directionAngle = Math.floor(Math.random() * 360);
    _this.vector = {
      x: Math.cos(_this.directionAngle) * _this.speed,
      y: Math.sin(_this.directionAngle) * _this.speed,
    };

    _this.update = function () {
      _this.border();
      _this.x += _this.vector.x;
      _this.y += _this.vector.y;
    };

    _this.updateMouse = function (x, y) {
      _this.border();
      _this.x = x;
      _this.y = y;
    };

    _this.border = function () {
      if (_this.x >= w || _this.x <= 0) {
        _this.vector.x *= -1;
      }

      if (_this.y >= h || _this.y <= 0) {
        _this.vector.y *= -1;
      }
      if (_this.x > w) _this.x = w;
      if (_this.y > h) _this.y = h;
      if (_this.x < 0) _this.x = 0;
      if (_this.y < 0) _this.y = 0;
    };

    _this.draw = function () {
      ctx.beginPath();
      ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = _this.color;
      ctx.fill();
    };
  };

  return (
    <div id="canvas-container">
      <canvas id="canvas" />
    </div>
  );
};

export default ParticlesBackground;
