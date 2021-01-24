import { Component, h } from '@stencil/core';

@Component({
  tag: 'slot-component',
  styleUrl: 'slot-component.css',
  shadow: true,
})
export class SlotComponent {

  render() {
    return (
      <div class="slot-machine">
        <div class="slot-col">
          <slot-avatar color="red"></slot-avatar>
          <slot-avatar color="indigo"></slot-avatar>
          <slot-avatar color="green"></slot-avatar>
          <slot-avatar color="black"></slot-avatar>
        </div>
        <div class="slot-col">
          <slot-avatar color="green"></slot-avatar>
          <slot-avatar color="red"></slot-avatar>
          <slot-avatar color="indigo"></slot-avatar>
          <slot-avatar color="black"></slot-avatar>
        </div>
        <div class="slot-col">
          <slot-avatar color="indigo"></slot-avatar>
          <slot-avatar color="green"></slot-avatar>
          <slot-avatar color="red"></slot-avatar>
          <slot-avatar color="black"></slot-avatar>
        </div>
      </div>
    );
  }

}
