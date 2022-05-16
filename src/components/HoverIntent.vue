<script>
import { h } from "vue";
import { Indicator } from "../services/Indicator";

export default {
  name: "HoverIntent",

  props: {
    color: {
      type: String,
      default: "white",
    },

    ms: {
      type: Object,
      default: () => ({
        in: 250,
        out: 250,
      }),
    },
  },

  data: () => ({
    isActive: false,
    isTouching: false,
  }),

  methods: {
    handleIn(e) {
      clearTimeout(this.timerOut);

      if (this.isActive) return;

      this.timerIn = setTimeout(
        () => {
          this.$emit("in");
          this.isActive = true;

          if (this.progressIndicator) this.removeIndicator();
        },
        this.isTouching ? 0 : this.ms.in - 250
      ); // - 250 to account for indicator easing

      this.addIndicator(e);
    },

    handleOut() {
      clearTimeout(this.timerIn);

      if (this.progressIndicator) this.removeIndicator();

      if (!this.isActive) return;

      this.timerOut = setTimeout(
        () => {
          this.$emit("out");

          this.isActive = false;
        },
        this.isTouching ? 0 : this.ms.out
      );
    },

    addIndicator(e) {
      this.progressIndicator = new Indicator({
        color: this.color,
        duration: this.ms.in,
        easing: "cubic-bezier(1, 1, 0, 1)",
        event: e,
      });
    },

    removeIndicator() {
      this.progressIndicator.kill();
      this.progressIndicator = null;
    },

    handleMouseIn(e) {
      if (this.isTouching) return;
      this.handleIn(e);
    },

    handleMouseOut() {
      this.handleOut();
    },

    handleTouchIn(e) {
      this.isTouching = true;
      this.handleIn(e);
      document.addEventListener("touchend", this.handleTouchOut);
    },

    handleTouchOut(e) {
      if (this.$el.contains(e.target)) return;

      this.handleOut();
      this.isTouching = false;
      document.removeEventListener("touchend", this.handleTouchOut);
    },
  },

  render() {
    return h(
      "div",
      {
        onTouchstart: this.handleTouchIn,
        onMouseenter: this.handleMouseIn,
        onMouseleave: this.handleMouseOut,
      },
      this.$slots.default()
    );
  },
};
</script>
