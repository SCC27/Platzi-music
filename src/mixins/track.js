/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
const trackMixin = {
    methods: {
        selectTrack() {
            if (!this.track.preview_url) { return }

            this.$store.commit('setTrack', this.track)
        }
    }
}

export default trackMixin
