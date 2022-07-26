import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-four',
  templateUrl: './scene-four.component.html',
  styleUrls: ['./scene-four.component.scss']
})
export class SceneFourComponent implements OnInit {
  vertexShader: string = `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;

        attribute vec3 position;
        varying vec4 vPos;

        void main()
        {

            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
            vPos = gl_Position;
        }
    `;
  fragmentShader: string = `
        precision highp float;

        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;
        varying vec4 vPos;

        void main()
        {
           vec3 color;

           if (vPos.y < 0.0)
               color = vec3(1.0, 0.0, 0.0);
           else
              color = vec3(1.0, 1.0, 1.0);

           gl_FragColor = vec4(color, 1.0);
        }
    `;

  constructor() { }

  ngOnInit(): void {
  }

}
