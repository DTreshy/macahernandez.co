export const state = () => ({
  overlay: false,
  overlay_image: undefined
})

export const mutations = {
  changeOverlayState (state, image) {
    if (state.overlay_image === undefined) {
      state.overlay = !state.overlay
      state.overlay_image = image
    } else {
      state.overlay_image = undefined
      state.overlay = false
    }
  }
}

export const actions = {
}

export const getters = {
  getOverlayState (state) {
    return state.overlay
  },
  getOverlayImage (state) {
    return state.overlay_image
  }
}
