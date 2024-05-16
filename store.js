import { defineStore } from "pinia";

export const usePiniaStore = defineStore({
  id: "portfoliopage",
  state: () => ({
    countWhileLoading: 30,
    transitionFinished: false,
    positionReached: false,
    visableAfterIntersection: false,
  }),
  actions: {
    setVisibility(visible) {
      this.visableAfterIntersection = visible;
    },

    _decreaseCountWhileLoading() {
      this.countWhileLoading--;
    },

    _handleTransitionEnd() {
      this.transitionFinished = true;
    },
    _handlePositionReachedProject() {
      this.positionReached = true;
    },
  },
});
