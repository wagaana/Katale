<template>
  <div>
    <content-loader
    :height="80"
      primaryColor="#f3f3f3"
      secondaryColor="#007bff"
      >
      <rect x="25" y="3" rx="3" ry="3" width="30%" height="8" />
      <rect x="25" y="15" rx="3" ry="3" width="15%" height="6" />
      <rect x="0" y="25" rx="3" ry="3" width="30%" height="6" />
      <rect x="0" y="35" rx="3" ry="3" width="40%" height="6" />
      <rect x="0" y="45" rx="3" ry="3" width="30%" height="6" />
      <circle cx="10" cy="10" r="10" />

      
      <rect x="85%" y="3" rx="3" ry="3" width="15%" height="12" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader,
  },
};
</script>
