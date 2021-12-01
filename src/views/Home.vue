<template>
    <Section-component>
      <template>
        <div class="home">
          <h2>Home</h2>
        </div>
        
        <filiais />
      </template>
    </Section-component>
</template>

<script>
import SectionComponent from '@/components/base/section.vue'
import filiais from '@/components/filiais.vue'
export default {
  components: {
    SectionComponent,
    filiais
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>