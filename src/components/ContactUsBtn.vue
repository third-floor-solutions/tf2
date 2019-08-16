<template>
  <a class="contact-us-btn" :style="style">
    <slot>Contact Us</slot>
  </a>
</template>
<script>
export default {
    props: [ "bgColor", "txtColor" ],
    computed: {
        style() {
            return {
                "background-color": this.bgColor,
                "color": this.txtColor
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.contact-us-btn {
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 700;
  border-radius: 0.25rem;
  text-transform: uppercase;
}
</style>
