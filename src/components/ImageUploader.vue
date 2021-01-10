<template>
  <div
    v-show="!uploadStore.isUploaded && !uploadStore.isLoading"
    class="bg-white w-84 md:w-96 h-auto rounded-xl shadow-lg px-7 py-8 dark:bg-gray-900"
  >
    <h2
      class="text-gray-600 text-xl text-center font-semibold dark:text-gray-400"
    >
      Upload your image
    </h2>

    <p class="text-center text-xs text-gray-400 mt-4 mb-7 dark:text-gray-500">
      File should be JPEG, PNG...
    </p>

    <!-- Drop zone -->
    <div
      class="bg-gray-100 w-drop h-56 mx-auto rounded-xl border-dashed border-2 border-blue-300 mb-4 dark:bg-gray-800 dark:border-gray-400"
      id="drop-zone"
      v-cloak
      @drop.prevent="dropImage"
      @dragover.prevent="highlightDrop"
      @dragleave.prevent="unHighlightDrop"
    >
      <div class="flex justify-center mt-8 mb-10">
        <img src="../assets/images/drop.svg" alt="" />
      </div>

      <p class="text-xs text-center text-gray-400">
        Drag & Drop your image here
      </p>
    </div>

    <div class="text-center text-gray-400 text-xs dark:text-gray-500">Or</div>

    <form class="mt-5" action="">
      <input
        @change="handleFileChange($event)"
        hidden
        type="file"
        name="image"
        id="upload"
      />
      <div class="flex justify-center">
        <label
          class="cursor-pointer text-white bg-blue-500 text-xs px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-gray-400"
          for="upload"
        >
          Choose a file
        </label>
      </div>
    </form>
  </div>
</template>

<script>
import uploadStore from "../composables/uploadStore";

export default {
  name: "ImageUploader",

  setup() {
    const highlightDrop = () => {
      let dropZone = document.querySelector("#drop-zone");
      dropZone.classList.add("highlight");
    };

    const unHighlightDrop = () => {
      let dropZone = document.querySelector("#drop-zone");
      dropZone.classList.remove("highlight");
    };

    return {
      uploadStore,
      highlightDrop,
      unHighlightDrop,
    };
  },

  methods: {
    dropImage: function (e) {
      this.unHighlightDrop();

      const file = e.dataTransfer.files[0];

      this.uploadStore.setFormData(file);

      this.uploadStore.uploadImage();
    },

    handleFileChange: function (e) {
      const file = e.target.files[0];

      this.uploadStore.setFormData(file);

      this.uploadStore.uploadImage();
    },
  },
};
</script>

<style scoped>
  .highlight {
    @apply border-blue-500 dark:border-blue-900 dark:bg-gray-700;
  }
</style>
