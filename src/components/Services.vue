<template>
  <div class="services">
    <div
      class="container mx-auto flex border-transparent px-3 py-4 flex-col items-center justify-center relative"
    >
      <h2>Sharpest tools from our shed</h2>
      <p
        class="description"
      >We use modern technologies to create impactful and engaging experiences for website and mobile. Your website is a living entity and requires care.</p>
      <div class="skill-container">
        <div
          class="skill-item"
          v-for="(s,i ) in skillset"
          :key="i"
        >
          <span class="pr-20 lg:pr-0">
            <p class="text-2xl font-medium lg:text-center" :class="s.custom_class">{{ s.title }}</p>
            <p class="text-base text-gray-500 leading-tight lg:text-center">{{ s.description }}</p>
          </span>
          <img
            class="w-24 absolute -right-24 lg:h-24 lg:right-auto lg:static lg:flex-shrink-0"
            :src="s.logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skillset: [
        {
          logo: "/logo/vue.svg",
          title: "Vue",
          description: "The Progressive JavaScript Framework",
          custom_class: ["text-color-vue"]
        },
        {
          logo: "/logo/laravel.svg",
          title: "Laravel",
          description: "The PHP Framework For Web Artisans",
          custom_class: ["text-color-laravel"]
        },
        {
          logo: "/logo/graphql.svg",
          title: "GraphQL",
          description: "A query language for your API",
          custom_class: ["text-color-graphql"]
        },
        {
          logo: "/logo/nodejs-icon.svg",
          title: "NodeJS",
          description: "A JavaScript runtime built on Chrome's V8",
          custom_class: ["text-color-nodejs"]
        },
        {
          logo: "/logo/react.svg",
          title: "React",
          description: "A JavaScript library for building user interfaces",
          custom_class: ["text-color-react"]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.services {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  padding: 5rem 0;
  background-color: #f7fafc;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0.5rem;
    text-align: center;
  }

  .description {
    text-align: center;
    color: #718096;
    font-weight: 500;
    line-height: 1.75rem;
  }

  .skill-container {
    display:flex;
    flex-direction: column;
    width: 100%;

    .skill-item {
        // m-2 inline-block shadow-md overflow-hidden rounded p-6 bg-white flex items-center h-32 justify-between relative lg:h-300 lg:w-64 lg:flex-col lg:flex-col-reverse lg:content-start lg:justify-around
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content:  space-between;
        position: relative;
        border-radius: .25rem;
        background-color: #ffffff;
        margin: 1rem;
    }
  }
}
</style>
