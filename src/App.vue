<template>
  <div class="h-screen bg-gray-100 dark:bg-gray-800">
    <div class="h-full flex justify-center items-center">
      <div class="h-full">
        <div class="flex items-center" style="height: 93%">
          <image-uploader></image-uploader>
          <upload-progress></upload-progress>
          <uploaded></uploaded>
        </div>
        <div>
          <page-footer></page-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Uploaded from "./components/Uploaded.vue";
import PageFooter from "./components/PageFooter.vue";
import ImageUploader from "./components/ImageUploader.vue";
import UploadProgress from "./components/UploadProgress.vue";

export default {
  name: "App",

  components: {
    Uploaded,
    PageFooter,
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
