import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 15);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function RGB(r, g, b) {
      const colorcheck = (c) => {
        if (c > 255) c = 255;
        if (c < 0) c = 0;
        return c;
      };
      r = colorcheck(r);
      g = colorcheck(g);
      b = colorcheck(b);
      return `rgb(${r},${g},${b})`;
    }

    function rgb2hex(rgb) {
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? `0x${("0" + parseInt(rgb[1], 10).toString(16)).slice(-2)}${("0" + parseInt(rgb[2], 10).toString(16)).slice(-2)}${("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)}` : '';
    }

    function rgb2color(r, g, b) {
      return rgb2hex(RGB(r, g, b));
    }

    function sin(t, h) {
      return Math.sin(t) * h;
    }

    const cubes = [];
    for (let x = -6; x <= 6; x++) {
      for (let z = -6; z <= 6; z++) {
        const cube = {};
        const geometry = new THREE.BoxGeometry(1, 1, 1, 6, 6, 6);
        const smooth = geometry.clone();
        const ccolor = Math.random() > 0.75 ? 'blue' : 'black';
        cube.colored = ccolor === 'blue';
        cube.material = new THREE.MeshPhongMaterial({ color: ccolor });
        cube.mesh = new THREE.Mesh(smooth, cube.material);
        scene.add(cube.mesh);
        cube.mesh.position.x = x;
        cube.mesh.position.z = z;
        cube.height = randint(1, 10) / 10;
        cube.aniOffset = randint(1, 400) / 100;
        cubes.push(cube);
      }
    }

    for (let x = -5; x <= 5; x += 5) {
      for (let z = -5; z <= 5; z += 5) {
        const light = new THREE.PointLight('white', 1, 7.5);
        light.position.set(x, 2, z);
        scene.add(light);
      }
    }

    camera.position.y = 8;
    camera.position.x = 6;
    camera.position.z = 4;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const render = function () {
      requestAnimationFrame(render);
      mainloop();
      renderer.render(scene, camera);
    };

    const color = {
      r: 0,
      g: 0,
      b: 255,
      rs: 0,
      gs: 0,
      bs: 0,
      rt: 0,
      gt: 0,
      bt: 255
    };

    let time = 0;

    function mainloop() {
      time += 1;
      camera.position.y += sin(time * 0.005 + 10, 0.005);
      camera.position.x += sin(time * 0.004 + 5, 0.005);
      camera.position.z += sin(time * 0.006, 0.005);
      camera.rotation.z += sin(time * 0.0045 + 15, 0.002);

      if (Math.abs(color.r - color.rt) >= 5) color.r += color.rs;
      if (Math.abs(color.g - color.gt) >= 5) color.g += color.gs;
      if (Math.abs(color.b - color.bt) >= 5) color.b += color.bs;

      if (Math.abs(color.r - color.rt) < 5 && Math.abs(color.g - color.gt) < 5 && Math.abs(color.b - color.bt) < 5) {
        color.rt = randint(0, 255);
        color.gt = randint(0, 255);
        color.bt = randint(0, 255);
        const divisor = 20;
        color.rs = (color.rt > color.r ? randint(5, 45) : -randint(5, 45)) / divisor;
        color.gs = (color.gt > color.g ? randint(5, 45) : -randint(5, 45)) / divisor;
        color.bs = (color.bt > color.b ? randint(5, 45) : -randint(5, 45)) / divisor;
      }

      const r = Math.round(color.r);
      const g = Math.round(color.g);
      const b = Math.round(color.b);

      for (const cube of cubes) {
        cube.mesh.position.y = sin(time / 100 + cube.aniOffset, cube.height);
        if (cube.colored) cube.mesh.material.color.setHex(rgb2color(r, g, b));
      }
    }

    render();

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  return null;
};

export default ThreeBackground;
