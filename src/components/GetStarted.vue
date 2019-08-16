<template>
  <div class="get-started">
    <div class="container">
      <h2 class="title">Ready to get started?</h2>
      <div class="message">
        <p>Let's start the beginning of our long and fruitful relationship.</p>
      </div>
      <a
        @click="showDialog = true"
        class="bg-blue-500 cursor-pointer text-blue-200 font-bold uppercase shadow mt-10 py-3 px-8 rounded"
      >Let's talk</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.get-started {
  background-color: #1a202c;
  padding: 5rem 1.5rem;
  color: #ffffff;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0;
      padding: 0;
    }

    .message {
      font-size: 1.25rem;
      font-weight: 500;
      color: #718096;
      margin: 2rem 0;
    }
  }
}
</style>
