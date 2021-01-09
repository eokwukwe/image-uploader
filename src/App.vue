<template>
  <div
    class="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800"
  >
    <div>
      <image-uploader></image-uploader>
      <upload-progress></upload-progress>
      <uploaded></uploaded>
    </div>
  </div>
</template>

<script>
import Uploaded from "./components/Uploaded.vue";
import ImageUploader from "./components/ImageUploader.vue";
import UploadProgress from "./components/UploadProgress.vue";

export default {
  name: "App",

  components: {
    Uploaded,
    ImageUploader,
    UploadProgress,
  },
};
</script>

<style>
  .height {
    height: 29rem;
  }

  .width {
    width: 25rem;
  }

  .w-drop {
    width: 97%;
  }
</style>
