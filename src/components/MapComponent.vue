<script setup></script>
<template>
  <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=praca%20raul%20soares%20belo&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 300px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 300px;
  width: 600px;
}
</style>
