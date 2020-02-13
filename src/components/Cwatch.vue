<template>
    <div class="camera">
        <h1>Composant camera diffuseur</h1>
        <div class="vid">

            <video id="retourVideo" playsinline controls loop muted autoplay width="150px" height="auto">

                <p>This browser does not support the video element.</p>
            </video>

            <video id="rightVideo" playsinline autoplay></video>

        </div>

        <button @click="watch">Lancer le stream</button>

    </div>
</template>r

<script>
    export default {
        name: 'Cwatch',
        data() {
            return {
                test: {},
                peer_id: ""


            }
        },
        methods: {

            watch() {

                let diffusionPeer = new Peer();
                diffusionPeer.on('open', (id) => {
                    console.log('My peer ID is: ' + id);
                    this.peer_id = id;

                    let param = {
                        peer_id: this.peer_id,
                        id_user: 3,
                        title: 'test',
                        description: 'test',
                    };
                    axios.post('/streams/stream', param).then((response) => {
                        console.log(response);
                    })
                });

                let retourVideo = document.getElementById('retourVideo');

                if (navigator.vendor === 'Google Inc.') {
                    let media = navigator.mediaDevices.getUserMedia({
                        audio: true,
                        video: false
                    });
                    // console.log(media)

                    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                        retourVideo.srcObject = stream;
                        retourVideo.play();
                        this.flux = retourVideo.captureStream();

                        diffusionPeer.on('call', function (call) {
                            call.answer(stream)
                            console.log(call)


                        });

                        // let stringFluxDiffusion = JSON.stringify(fluxDiffusion);
                        // this.$store.commit('getFlux', this.flux);
                        // this.$store.commit('onAir', 1);

                    });

                } else if (navigator.vendor === '') {
                    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                        retourVideo.srcObject = stream;
                        this.flux = retourVideo.mozCaptureStream();
                        this.$store.commit('getFlux', this.flux);
                        this.$store.commit('onAir', 1)

                    });
                }


            }

        },

        mounted() {


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
