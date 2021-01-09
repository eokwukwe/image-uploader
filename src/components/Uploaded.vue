<template>
  <div
    v-show="uploadStore.isUploaded"
    class="bg-white width height rounded-xl shadow-lg px-7 py-8 dark:bg-gray-900"
  >
    <div class="flex justify-center">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-12 h-12 fill-current text-green-700 dark:text-green-500"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <h2
      class="text-gray-600 text-xl text-center font-semibold mt-3 mb-7 dark:text-gray-400"
    >
      Uploaded Successfully!
    </h2>

    <!-- Image Zone -->
    <div
      class="bg-gray-100 w-drop h-56 mx-auto rounded-xl mb-4"
      id="uploaded-image"
    >
      <img
        class="h-full w-full object-cover rounded-xl"
        :src="isHttps ? uploadStore.secureURL : uploadStore.unSecureURL"
        alt="upload image"
      />
    </div>

    <div class="mt-5 relative" action="">
      <input
        type="text"
        :value="isHttps ? uploadStore.secureURL : uploadStore.unSecureURL"
        id="uploadedLink"
        class="text-xs bg-gray-100 py-2 pl-2 rounded-lg border border-gray-300 w-full focus:outline-none dark:bg-gray-800 dark:text-gray-500 dark:border-gray-900"
      />
      <button
        @click="copyLink"
        class="cursor-pointer text-white bg-blue-500 text-xs px-4 py-2 rounded-lg absolute right-0 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 dark:bg-blue-900 dark:text-gray-400"
      >
        Copy link
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import uploadStore from "../composables/uploadStore";

export default {
  name: "Uploaded",

  setup() {
    const copyLink = () => {
      const uploadedLink = document.querySelector("#uploadedLink");

      uploadedLink.select();
      uploadedLink.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand("copy");
    };

    const isHttps = computed(() => {
      return window.location.protocol === "https:";
    });

    return {
      isHttps,
      copyLink,
      uploadStore,
    };
  },
};
</script>

<style scoped>
</style>
