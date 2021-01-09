import axios from 'axios'
import { reactive, computed, readonly } from 'vue'

const cloudinaryUploadUrl = 'https://api.cloudinary.com/v1_1/fcode/image/upload'

const state = reactive({
  url: '',
  formData: '',
  secureUrl: '',
  loading: false,
  uploaded: false, 
})

function setFormData(uploadedImage) {
  state.formData = new FormData()
  state.formData.append('upload_preset', 'devchallenges')
  state.formData.append('tags', 'browser_upload')
  state.formData.append('file', uploadedImage)
}

async function uploadImage() {
  try {
    state.loading = true

    const { data } = await axios.post(cloudinaryUploadUrl, state.formData)

    state.url = data.url

    state.secureUrl = data.secure_url
  } catch (error) {
    console.error(error)
  } finally {
    state.uploaded = true
    state.loading = false
  }
}

const unSecureURL = computed(() => state.url)
const isLoading = computed(() => state.loading)
const secureURL = computed(() => state.secureUrl)
const isUploaded = computed(() => state.uploaded)

const uploadStore = readonly({
  state,
  secureURL,
  isLoading,
  isUploaded,
  unSecureURL,
  setFormData,
  uploadImage
})

export default uploadStore
