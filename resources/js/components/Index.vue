<template>
  <div class="w-25">
      <div ref="dropzone" class="p-5 d-block bg-dark text-center text-light btn">
          Upload
      </div>
  </div>
</template>

<script>
import Dropzone from 'dropzone'
export default {
    name: "Index",


    data() {
        return {
            dropzone: null,
        }
    },


    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: "/file/post",
        })
    },

}
</script>

<style scoped>

</style>
