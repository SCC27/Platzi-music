/* eslint-disable indent */
import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
    // eslint-disable-next-line indent
    const type = 'track'

    return platziMusicService.get('/search', {
        // eslint-disable-next-line indent
        params: { q, type }
    })
        .then(res => res.data)
}

trackService.getById = function (id) {
    return platziMusicService.get(`/tracks/id/${id}`)
        .then(res => res.data)
}

export default trackService
