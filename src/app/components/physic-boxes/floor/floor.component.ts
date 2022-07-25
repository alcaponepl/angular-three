import { Component, Input } from '@angular/core';
import { NgtTriple } from "@angular-three/core";
import { NgtPhysicBody } from "@angular-three/cannon";

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
  providers: [NgtPhysicBody]
})
export class FloorComponent {
  @Input() position?: NgtTriple;
  rotation = [-Math.PI / 2, 0, 0] as NgtTriple;

  planeRef = this.physicBody.usePlane(() => ({
    args: [1000, 1000],
    rotation: this.rotation,
    position: this.position,
  }));
  constructor(private physicBody: NgtPhysicBody) {}

}
