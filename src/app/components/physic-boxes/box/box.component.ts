import { Component, Input } from '@angular/core';
import { NgtTriple } from "@angular-three/core";
import { NgtPhysicBody } from "@angular-three/cannon";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  providers: [NgtPhysicBody]
})
export class BoxComponent {
  @Input() position?: NgtTriple;
  rotation = [0.4, 0.2, 0.5] as NgtTriple;
  boxRef = this.physicBody.useBox(() => ({
    mass: 1,
    position: this.position,
    rotation: this.rotation,
  }));

  constructor(private physicBody: NgtPhysicBody) {}

}
