import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-five',
  templateUrl: './scene-five.component.html',
  styleUrls: ['./scene-five.component.scss']
})
export class SceneFiveComponent implements OnInit {
  vertexShader: string = `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;

        attribute vec3 position;
        attribute vec2 uv;
        varying vec4 vPos;
        varying vec2 vUv;

        void main()
        {

            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;

            gl_Position = projectedPosition;
            vPos = gl_Position;
            vUv = uv;
        }
    `;
  fragmentShader: string = `
        precision highp float;

        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;
        varying vec4 vPos;
        varying vec2 vUv;

        void main()
        {
            float strength = vUv.x;

            gl_FragColor = vec4(vec3(strength), 1.0);
        }
    `;


  constructor() { }

  ngOnInit(): void {
  }

}
