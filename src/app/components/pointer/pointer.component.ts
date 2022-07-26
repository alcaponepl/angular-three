import { Component, NgZone, OnInit } from '@angular/core';
import { NgtComponentStore, NgtStore } from "@angular-three/core";
import { NgtPhysicBody } from "@angular-three/cannon";

@Component({
  selector: 'app-pointer',
  providers: [NgtPhysicBody],
  template: ``
})
export class PointerComponent extends NgtComponentStore implements OnInit{
  readonly pointerRef = this.physicBody.useSphere(
    () => ({
      type: 'Kinematic',
      args: [3],
      position: [0, 0, 0],
    }),
    false
  );

  constructor(private physicBody: NgtPhysicBody, private store: NgtStore, private zone: NgZone) {
    super();
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.store.ready$.subscribe((isReady) => {
        console.log(isReady)
        if (isReady) {
          this.store.registerBeforeRender({
            callback: ({ pointer, viewport }) => {
              this.pointerRef.api.position.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0);
            },
          })
        }
      })
    });
  }
}
