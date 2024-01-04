<!-- src/components/QuestionInput.vue -->
<template>
    <div class="question-input">
      <h1>What are your questions?</h1>
      <input type="text" v-model="question" placeholder="Type your question here...">
      <button @click="submitQuestion">Submit</button>
      <!-- Removed the second 'Speak' button -->
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      question: '',
    };
  },
  methods: {
    submitQuestion() {
      if (this.question.trim()) {
        this.$emit('onSubmit', this.question);
        this.question = ''; // 清空输入框
      } else {
        alert('Please type a question.');
      }
    },
  },
};
</script>

  <style scoped>
  
  .question-input {
    text-align: center;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #ffffff, #f8f8f8);
    padding: 1rem 1rem; /* Adjusted padding */
  }
  
  .question-input h1 {
    margin-top: 1rem; /* Adjusted top margin */
    margin-bottom: 0.5rem; /* Reduced bottom margin */
    font-size: 2rem; /* Adjusted font size */
    color: #333;
  }
  
  .question-input input {
    width: 100%; /* Adjusted width to 100% */
    max-width: 500px; /* Set a max width for larger screens */
    padding: 0.75rem; /* Adjusted padding to match button */
    margin-bottom: 1rem; /* Adjusted bottom margin */
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .question-input button {
    width: auto; /* Auto width to wrap content */
    padding: 0.75rem 1.5rem; /* Adjusted padding to match input */
    margin-bottom: 1rem; /* Adjusted bottom margin */
    border: none;
    border-radius: 20px;
    background-color: #3498db;
    color: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    cursor: pointer;
    font-size: 1rem; /* Adjusted font size */
  }
  
  .question-input button:hover {
    background-color: #2980b9;
  }
  </style>
  