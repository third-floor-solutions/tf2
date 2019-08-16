<template>
  <div class="get-started">
    <div class="container">
      <h2 class="title">Ready to get started?</h2>
      <div class="message">
        <p>Let's start the beginning of our long and fruitful relationship.</p>
      </div>

      <ContactUsBtn bgColor="#4299e1" txtColor="#bee3f8" >
          Let's talk
      </ContactUsBtn>
    </div>
  </div>
</template>
<script>
import ContactUsBtn from "@/components/ContactUsBtn";

export default {
    components: {
        ContactUsBtn
    }
}
</script>
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
