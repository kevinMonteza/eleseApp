<template>
    <div class="modal uk-flex-top uk-modal">
        <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <button class="uk-modal-close-default uk-close uk-icon" type="button" uk-close></button>
            <div class="modalBody uk-text-center">
                 <ModalBody :msj="mensaje"/> 
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import ModalBody from '@/components/modalBody.vue'
export default {
    name:'modal',
    props:['mensaje'],
    components:{
        ModalBody
    }
}

</script>

<style>
@media only screen and (min-width: 600px){
    .modalBody{
        border: 2px solid #15beba;
        font-size: .9rem;
        padding: 50px;
}
}

@media only screen and (max-width: 600px) {
.modalBody{
        border: 2px solid #15beba;
        font-size: .8rem;
        padding: 40px 30px;
    }
}

</style>
