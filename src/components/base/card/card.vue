<template>
    <div class="card rounded">
        <card-header :text="textHeader">
            <slot name="header"></slot>
        </card-header>
        <card-body :type="type">
            <slot name="body"></slot>
        </card-body>
    </div>
</template>

<script>
import cardHeader from './cardHeader.vue'
import cardBody  from './cardBody.vue'
export default {
    components: {
        cardBody,
        cardHeader
    },
    props: ['textHeader', 'type']
}
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.404);
        
    }
    .rounded {
        border-radius: 15px 50px 30px;
    }

</style>>

