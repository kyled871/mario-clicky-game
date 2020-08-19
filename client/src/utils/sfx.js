export default {

    coinSound: function() {

        let coin = document.createElement('audio')
        coin.src = 'assets/audio/coin_sfx_edited.mp3'
        coin.play()

    },

    wrongSound: function() {

        let doh = document.createElement('audio')
        doh.src = 'assets/audio/mario_doh.mp3'
        doh.play()

    },

    themeSong: function() {

        let theme = document.createElement('audio')
        theme.src = 'assets/audio/theme.mp3'
        theme.loop = true
        theme.play()

    },

}