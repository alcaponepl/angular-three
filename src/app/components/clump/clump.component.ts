import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtTextureLoader } from "@angular-three/soba/loaders";
import { NgtPhysicBody } from "@angular-three/cannon";
import { NgtRenderState } from "@angular-three/core";
import * as THREE from 'three';

const mat = new THREE.Matrix4();
const vec = new THREE.Vector3();

@Component({
  selector: 'app-clump',
  templateUrl: './clump.component.html',
  styleUrls: ['./clump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader, NgtPhysicBody],
})
export class ClumpComponent {
  readonly count = 40;
  readonly texture$ = this.textureLoader.load('assets/logo.jpg');

  readonly sphereRef = this.physicBody.useSphere<THREE.InstancedMesh>(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [
      THREE.MathUtils.randFloatSpread(20),
      THREE.MathUtils.randFloatSpread(20),
      THREE.MathUtils.randFloatSpread(20),
    ],
  }));

  constructor(private textureLoader: NgtTextureLoader, private physicBody: NgtPhysicBody) {}

  onBeforeRender($event: { state: NgtRenderState; object: THREE.InstancedMesh }) {
    for (let i = 0; i < this.count; i++) {
      // Get current whereabouts of the instanced sphere
      $event.object.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      this.sphereRef.api
        .at(i)
        .applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-50).toArray(), [0, 0, 0]);
    }
  }
}
