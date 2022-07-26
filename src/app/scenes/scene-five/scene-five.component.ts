import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { NgtRenderState } from "@angular-three/core";

@Component({
  selector: 'app-scene-five',
  templateUrl: './scene-five.component.html',
  styleUrls: ['./scene-five.component.scss']
})
export class SceneFiveComponent implements OnInit {
  uniforms = {
    uFrequency: {value: new THREE.Vector2(10, 5)},
    uTime: {value: 0}
  };
  vertexShader: string = `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;

        attribute vec3 position;
        attribute vec2 uv;
        varying vec4 vPos;
        varying vec2 vUv;
        uniform vec2 uFrequency;
        uniform float uTime;

        void main()
        {

            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            modelPosition.z += sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
            modelPosition.z += sin(modelPosition.y * uFrequency.y + uTime) * 0.1;
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
            vec3 color;
            if (vUv.y < 0.5)
               color = vec3(1.0, 0.0, 0.0);
            else
              color = vec3(1.0, 1.0, 1.0);

            gl_FragColor = vec4(color, 1.0);
        }
    `;


  constructor() {
  }

  ngOnInit(): void {
  }

  onBeforeRender(tes: any) {
    // object.position.y = Math.sin(clock.getElapsedTime()) * 0.06;
    this.uniforms.uTime.value = tes.state.clock.getElapsedTime();
  }

}
