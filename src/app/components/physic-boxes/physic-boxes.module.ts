import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgtAmbientLightModule, NgtDirectionalLightModule } from "@angular-three/core/lights";
import { NgtColorAttributeModule, NgtVector2AttributeModule } from "@angular-three/core/attributes";
import { PhysicBoxesComponent } from './physic-boxes.component';
import { NgtPhysicBody, NgtPhysicsModule } from "@angular-three/cannon";
import { FloorComponent } from './floor/floor.component';
import { NgtMeshModule } from "@angular-three/core/meshes";
import { NgtBoxGeometryModule, NgtPlaneGeometryModule } from "@angular-three/core/geometries";
import { NgtMeshLambertMaterialModule, NgtShadowMaterialModule } from "@angular-three/core/materials";
import { BoxComponent } from './box/box.component';
import { NgtCanvasModule } from "@angular-three/core";


@NgModule({
  declarations: [PhysicBoxesComponent, FloorComponent, BoxComponent],
  imports: [
    CommonModule,
    NgtDirectionalLightModule,
    NgtColorAttributeModule,
    NgtVector2AttributeModule,
    NgtAmbientLightModule,
    NgtPhysicsModule,
    NgtMeshModule,
    NgtPlaneGeometryModule,
    NgtShadowMaterialModule,
    NgtBoxGeometryModule,
    NgtMeshLambertMaterialModule,
    NgtCanvasModule,
  ],
  exports: [
    PhysicBoxesComponent
  ],
})
export class PhysicBoxesModule {
}
