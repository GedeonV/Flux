<template>
    <div class="camera">
        <h1>Composant camera viewer</h1>

        <button @click="watch">watch</button>
        <div class="vid">
            <video
                    ref="video"
                    id="video"
                    muted="true"
                    playsinline
                    controls
            />


        </div>


    </div>
</template>

<script>
    export default {
        name: 'Ccamera',
        data() {
            return {
                foreignPeerId: ''
            }
        },
        methods: {
            watch() {
                // console.log(this.$store.state.flux.id);


                // if (this.$store.state.onAir === 1) {


                const video = document.getElementById('video');
                console.log(this.foreignPeerId)

                let media = navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false
                }).then((mediaStream) => {
                    let destinationPeer = new Peer();
                    destinationPeer.on('open', (id) => {
                        console.log('My peer ID is: ' + id);
                    })
                    let call = destinationPeer.call(this.foreignPeerId, mediaStream)
                    console.log(mediaStream);
                    call.on('stream', (response) => {
                        console.log("réponse :" + response)
                    }, "error", (error) => {
                        console.log('error : ' + error)
                    });

                });


                // } else {
                //     alert("le stream n'est pas activé")
                // }

            }

        },
        mounted() {

            axios.get('/streams/stream/3').then((response) => {
                // console.log(response.data.peer_id)
                this.foreignPeerId = response.data.peer_id
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    video {
        margin-left: 2%;
    }

</style>

