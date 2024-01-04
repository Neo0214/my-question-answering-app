<template>
    <div class="answer-box">
      <template v-if="loding">
        <div class="loader"></div>
      </template>
      <template v-else>
        {{ displayText }}
      </template>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      answer: String,
      loding: Boolean
    },
    data() {
      return {
        displayText: '',
        timer: null
      };
    },
    watch: {
      answer(newValue) {
        this.displayText = ''; // 清空当前显示的文本
        clearInterval(this.timer);
        let i = 0;
        this.timer = setInterval(() => {
          if (i < newValue.length) {
            this.displayText += newValue.charAt(i);
            i++;
          } else {
            clearInterval(this.timer);
          }
        }, 120); // 速度可以调整
      }
    }
  }
  </script>
  
<style scoped>
.answer-box {
  text-align: left;
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #e2e2e2;
  min-height: 50px; /* 调整为更适合内容的最小高度 */
  width: 80%; /* 使盒子更宽一些 */
  background-color: #f9f9f9; /* 轻微的背景色 */
  border-radius: 10px; /* 圆角边框 */
  word-wrap: break-word;
  font-size: 1rem; /* 调整字体大小 */
  line-height: 1.5; /* 行间距 */
  color: #555; /* 字体颜色 */
  box-shadow: 0 4px 8px rgba(0,0,0,0.05); /* 添加一些阴影 */
}

.loader{
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 50%;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg); }
}
  </style>
  