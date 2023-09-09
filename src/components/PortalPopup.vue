<template>
  <div>
    <Teleport to="body">
      <div
        class="portalPopupOverlay"
        :style="popupStyle"
        @click="onOverlayClick"
      >
        <div :ref="relContainerRef" :style="relativeStyle">
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>
<script>
  import { defineComponent, ref, Teleport } from 'vue'


  export default defineComponent({
      name: 'PortalPopup',
      data() {
          return {
              relContainerRef: ref(null),
              relativeStyle: { type: "static" }
          }
      },
      props: {
          isOpen: { type: Boolean, default: false },
          overlayColor: { type: String },
          placement: { type: String, default: "Centered" },
          onOutsideClick: { type: Boolean, default: false },
          zIndex: { type: Number, default: 100 },
          left: { type: Number, default: 0 },
          right: { type: Number, default: 0 },
          top: { type: Number, default: 0 },
          bottom: { type: Number, default: 0 },
          onOutsideClick: { type: Function },
    },
      mounted() {
        this.setPosition();
        window.addEventListener("resize", this.setPosition);
        window.addEventListener("scroll", this.setPosition, true);
      },
      unmounted() {
        window.removeEventListener("resize", this.setPosition);
        window.removeEventListener("scroll", this.setPosition, true);
      },
      methods: {
          onOverlayClick(e) {
            if (this.onOutsideClick && e.target.classList.contains("portalPopupOverlay")) {
              this.onOutsideClick();
            }
            e.stopPropagation();
          },
          setPosition() {
              const relativeItem = this.relativeLayerRef?.current?.getBoundingClientRect();
              const containerItem = this.relContainerRef?.current?.getBoundingClientRect();
              const style  = {};
              if (relativeItem && containerItem) {
                  const {
                      x: relativeX,
                      y: relativeY,
                      width: relativeW,
                      height: relativeH,
                  } = relativeItem;
                  const { width: containerW, height: containerH } = containerItem;
                  style.position = "absolute";
                  switch (this.placement) {
                      case "Top left":
                          style.top = relativeY - containerH - this.top;
                          style.left = relativeX + this.left;
                          break;
                      case "Top right":
                          style.top = relativeY - containerH - this.top;
                          style.left = relativeX + relativeW - containerW - this.right;
                          break;
                      case "Bottom left":
                          style.top = relativeY + relativeH + this.bottom;
                          style.left = relativeX + this.left;
                          break;
                      case "Bottom right":
                          style.top = relativeY + relativeH + this.bottom;
                          style.left = relativeX + relativeW - containerW - this.right;
                          break;
                  }
                  this.relativeStyle = style;
              } else {
                  style.maxWidth = "90%";
                  style.maxHeight = "90%";
                  this.relativeStyle = style;
              }
          }
      },
      computed: {
          popupStyle()  {
              const style = {};
              style.zIndex = 100;
              if (this.overlayColor) {
                  style.backgroundColor = this.overlayColor;
              }
              if (!this.relativeLayerRef?.current) {
                  switch (this.placement) {
                      case "Centered":
                          style.alignItems = "center";
                          style.justifyContent = "center";
                          break;
                      case "Top left":
                          style.alignItems = "flex-start";
                          break;
                      case "Top center":
                          style.alignItems = "center";
                          break;
                      case "Top right":
                          style.alignItems = "flex-end";
                          break;
                      case "Bottom left":
                          style.alignItems = "flex-start";
                          style.justifyContent = "flex-end";
                          break;
                      case "Bottom center":
                          style.alignItems = "center";
                          style.justifyContent = "flex-end";
                          break;
                      case "Bottom right":
                          style.alignItems = "flex-end";
                          style.justifyContent = "flex-end";
                          break;
                  }
              }
              return style;
          }
      }
  })
</script>
<style scoped>
  .portalPopupOverlay {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
