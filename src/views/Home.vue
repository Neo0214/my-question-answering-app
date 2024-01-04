// src/views/Home.vue
<template>
  <div>
    <div class="home-container">
      <h1>Welcome to the Smart Speaker</h1>
      <AnimeAvatar :avatarSrc="avatarSrc" :avatarSpeakingSrc="avatarSpeakingSrc" ref="avatar" />
      <AnswerBox :answer="answer" :loding="loading" ref="answerBox" />
      <button @click="speak" :disabled="loading">Speak</button>
      <QuestionInput @onSubmit="handleQuestionSubmit" />
      <!-- 其他内容 -->
    </div>
  </div>
</template>

<script>
import QuestionInput from '@/components/QuestionInput.vue';
import AnimeAvatar from '@/components/AnimeAvatar.vue';
import AnswerBox from '@/components/AnswerBox.vue';
import axios from 'axios';
// export default {
//   name: 'HomeView',
// };
export default {
  name: 'HomeView',
  components: {
    QuestionInput,
    AnimeAvatar,
    AnswerBox,
  },
  data() {
    return {
      avatarSrc: '/girl.png',
      avatarSpeakingSrc: '/girl.gif',
      answer: '',
      loading : false,
    };
  },
  methods: {
    handleQuestionSubmit(question) {
      this.loading = true;
      // 向后端发送问题
      axios.post('http://localhost:8081/message', { sentence: question })
        .then(response => {
          this.answer = response.data.message;
          this.audioId = response.data.id;
          this.loading = false;
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
        });
    },
    speak() {
    this.$refs.avatar.startSpeaking();
    axios.get('http://localhost:8081/play',{params:{id:this.audioId},responseType: 'blob'})
    .then(response => {
      const audioBlob = response.data;
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => {
        this.$refs.avatar.stopSpeaking();
        URL.revokeObjectURL(audioUrl); // 清理资源
      };
    })
    .catch(error => {
      console.error('Error fetching audio:', error);
      this.$refs.avatar.stopSpeaking();
    });
  }
  }
};
</script>

<style>

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin-bottom: 1rem; /* Reduced bottom margin */
  font-size: 2.5rem; /* You might adjust this if it's too large */
  color: #333;
}

button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

button:hover {
  background-color: #2980b9;
}

@media (max-height: 700px) {
  h1 {
    margin: 0.5rem 0; /* 在较小高度的屏幕上减少标题的边距 */
  }

  .avatar-container,
  .answer-box,
  .question-input {
    margin: 0.5rem 0; /* 减少元素的边距 */
  }
}
</style>

