<template>
    <div class="avatar-container">
      <img :src="speaking ? avatarSpeakingSrc : avatarSrc" alt="Anime Avatar" class="avatar" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      avatarSrc: String,
      avatarSpeakingSrc: String
    },
    data() {
      return {
        speaking: false
      };
    },
    methods: {
      startSpeaking() {
        this.speaking = true;
        // 开始播放语音合成
      },
      stopSpeaking() {
        this.speaking = false;
        // 停止播放语音合成
      }
    }
  }
  </script>
  
  <style scoped>
  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .avatar {
    /* 限制头像的大小 */
    max-width: 150px; /* 或者任何适合你设计的宽度 */
    max-height: 150px; /* 高度和宽度一致，保持头像的圆形 */
    width: 100%; /* 响应式，但不会超过max-width */
    height: auto; /* 保持图片比例 */
    border-radius: 50%; /* 圆形头像 */
    transition: transform 1s; /* 平滑变换效果 */
  }
  .avatar:hover {
    transform: scale(1.1); /* 鼠标悬停时放大效果 */
  }
  </style>
  