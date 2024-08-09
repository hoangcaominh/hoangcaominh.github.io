<script setup lang="ts">
import { ref } from "vue"
import type { FileUploadUploaderEvent } from "primevue/fileupload"

// 512 KB
const MAX_FILE_SIZE = 1024 * 512
// 20 replays
const MAX_FILE_COUNT = 20

const results = ref<File[]>([])

const replayUploader = (event: FileUploadUploaderEvent) => {
  const replays = event.files as File[]
  results.value = []
  replays.forEach((replay) => results.value.push(replay))
}
</script>

<template>
  <FileUpload
    multiple
    :max-file-size="MAX_FILE_SIZE"
    :file-limit="MAX_FILE_COUNT"
    custom-upload
    @uploader="replayUploader($event)"
  >
    <template #empty>
      <p class="py-2">Drag and drop replay files here to upload.</p>
    </template>
    <template #content="{ files, removeFileCallback }">
      <div v-if="files.length > 0">
        <div
          class="grid grid-cols-3 w-1/2 items-center space-x-1 px-5 py-1"
          v-for="(file, index) in files"
          :key="file.name + index"
        >
          <div>{{ file.name }}</div>
          <Badge class="w-24 px-3" severity="info">{{ (file.size / 1024).toFixed(2) }} KB</Badge>
          <Button
            icon="pi pi-times"
            @click="removeFileCallback(index)"
            outlined
            rounded
            severity="danger"
          ></Button>
        </div>
      </div>
    </template>
  </FileUpload>
  <ReplaySummary v-for="result in results" :key="result.name" :file="result"></ReplaySummary>
</template>
