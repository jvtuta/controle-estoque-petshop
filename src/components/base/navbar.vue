<template>
  <div class="navcontainer navbg">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">
        
        <h3>{{ title }}</h3>     
    </div>
    <div>
        <slot></slot>
    </div>
    <div class="actions">
        <slot name="actions">
        </slot>
    </div>
  </div>
</template>

<script>
export default {
    props:['title', 'link']

}
</script>

<style scoped>
div.actions {
    align-self: center;
    margin-left: auto !important;
}

.navcontainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    margin: 0px 0px 50px 0px;
    box-sizing: border-box;
    align-self: center;
}

.navbg {
    color: rgb(255, 248, 248);
    background: rgb(100, 98, 98);
}

.navcontainer div {
    margin: 0px 10px;
}

.title {
    padding: 5px;
    align-self: center;
}

.navcontainer div h3 {
    color: inherit;
    text-align: center;
    align-self: center;
    
}

.icon {
    align-self: center;
    font-size: 26px;
}

</style>