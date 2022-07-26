import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgtCanvasModule } from "@angular-three/core";
import { NgtInstancedMeshModule, NgtMeshModule } from "@angular-three/core/meshes";
import {
  NgtAmbientLightModule,
  NgtDirectionalLightModule,
  NgtPointLightModule,
  NgtSpotLightModule
} from "@angular-three/core/lights";
import { NgtBoxGeometryModule, NgtPlaneGeometryModule, NgtSphereGeometryModule } from "@angular-three/core/geometries";
import {
  NgtMeshBasicMaterialModule,
  NgtMeshStandardMaterialModule, NgtRawShaderMaterialModule,
  NgtShaderMaterialModule
} from "@angular-three/core/materials";
import { NgtStatsModule } from "@angular-three/core/stats";
import { NgtSobaOrbitControlsModule } from "@angular-three/soba/controls";
import { CubeComponent } from './components/cube/cube.component';
import { SceneOneComponent } from './scenes/scene-one/scene-one.component';
import { SceneTwoComponent } from './scenes/scene-two/scene-two.component';
import {  NgtPhysicsModule } from "@angular-three/cannon";
import { PhysicBoxesModule } from "./components/physic-boxes/physic-boxes.module";
import { SceneThreeComponent } from './scenes/scene-three/scene-three.component';
import { SceneFourComponent } from './scenes/scene-four/scene-four.component';
import { NgtVector2AttributeModule } from "@angular-three/core/attributes";
import { NgtSobaEnvironmentModule, NgtSobaSkyModule } from "@angular-three/soba/staging";
// import { NgtEffectComposerModule } from "@angular-three/postprocessing";
import { PointerComponent } from './components/pointer/pointer.component';
import { ClumpComponent } from './components/clump/clump.component';
import { SceneFiveComponent } from './scenes/scene-five/scene-five.component';
// import { NgtBloomEffectModule } from "@angular-three/postprocessing/effects";

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    SceneOneComponent,
    SceneTwoComponent,
    SceneThreeComponent,
    SceneFourComponent,
    PointerComponent,
    ClumpComponent,
    SceneFiveComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    NgtCanvasModule,
    NgtMeshModule,
    NgtMeshStandardMaterialModule,
    NgtBoxGeometryModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtStatsModule,
    NgtSobaOrbitControlsModule,
    NgtPhysicsModule,
    PhysicBoxesModule,
    NgtDirectionalLightModule,
    NgtVector2AttributeModule,
    NgtSobaEnvironmentModule,
    // NgtEffectComposerModule,
    NgtSobaSkyModule,
    NgtSphereGeometryModule,
    NgtInstancedMeshModule,
    // NgtBloomEffectModule
    NgtShaderMaterialModule,
    NgtPlaneGeometryModule,
    NgtRawShaderMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
