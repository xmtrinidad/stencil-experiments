/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface SlotAvatar {
        "color": string;
    }
    interface SlotComponent {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLSlotAvatarElement extends Components.SlotAvatar, HTMLStencilElement {
    }
    var HTMLSlotAvatarElement: {
        prototype: HTMLSlotAvatarElement;
        new (): HTMLSlotAvatarElement;
    };
    interface HTMLSlotComponentElement extends Components.SlotComponent, HTMLStencilElement {
    }
    var HTMLSlotComponentElement: {
        prototype: HTMLSlotComponentElement;
        new (): HTMLSlotComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "slot-avatar": HTMLSlotAvatarElement;
        "slot-component": HTMLSlotComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface SlotAvatar {
        "color"?: string;
    }
    interface SlotComponent {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "slot-avatar": SlotAvatar;
        "slot-component": SlotComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "slot-avatar": LocalJSX.SlotAvatar & JSXBase.HTMLAttributes<HTMLSlotAvatarElement>;
            "slot-component": LocalJSX.SlotComponent & JSXBase.HTMLAttributes<HTMLSlotComponentElement>;
        }
    }
}