import { Component, Host, h } from '@stencil/core';
import { Prop } from '@stencil/core';

@Component({
  tag: 'slot-avatar',
  styleUrl: 'slot-avatar.css',
  shadow: true,
})
export class SlotAvatar {
  @Prop({ attribute: 'color' }) avatarColor: string;
  render() {
    return (
      <Host style={{backgroundColor: this.avatarColor}}>
        <slot></slot>
      </Host>
    );
  }

}
