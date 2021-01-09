<template>
  <div
    class="bg-white width h-36 rounded-lg shadow-lg px-8 py-8 dark:bg-gray-900"
  >
    <h2 class="text-gray-600 text-xl font-semibold mb-5 dark:text-gray-400">
      Uploading...
    </h2>

    <div
      class="flex items-center w-full h-2 bg-gray-200 rounded-lg relative dark:bg-gray-700"
    >
      <div
        id="loading"
        class="w-24 h-full bg-blue-600 rounded-lg absolute dark:bg-blue-800"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadProgress",
};
</script>

<style scoped>
  #loading {
    -webkit-animation: backandforth 2s ease 0s;
    -webkit-animation-iteration-count: infinite;
    animation: backandforth 3s ease 0s;
    animation-iteration-count: infinite;
  }

  @-webkit-keyframes backandforth {
    0% {
      left: 0;
    }
    50% {
      left: 72%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes backandforth {
    0% {
      left: 0;
    }
    50% {
      left: 72%;
    }
    100% {
      left: 0;
    }
  }
</style>
