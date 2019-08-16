<template>
  <footer>
    <div class="container">
      <address class="address-links">
        <a :href="`mailto:${contact.email}`" target="_blank" class="email-link">{{ contact.email }}</a>
        <a :href="`tel:${contact.phone}`" target="_blank">{{ contact.phone }}</a>
        <a>{{ contact.address }}</a>
      </address>
      <div class="social-media-links">
        <a :href="mediaLinks.github" target="_blank" class="w-8 cursor-pointer">
          <GitHubSVG />
        </a>
        <a :href="mediaLinks.facebook" target="_blank" class="w-8 cursor-pointer">
          <FacebookSVG />
        </a>
        <a :href="mediaLinks.linkedIn" target="_blank" class="w-8 cursor-pointer">
          <LinkedInSVG />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import GitHubSVG from "@/assets/icons/github.svg";
import FacebookSVG from "@/assets/icons/facebook.svg";
import LinkedInSVG from "@/assets/icons/linkedin.svg";

export default {
  components: {
    GitHubSVG,
    FacebookSVG,
    LinkedInSVG
  },
  data() {
    return {
      contact: {
        email: "thirdfloor.solutions@gmail.com",
        phone: "+639171698676",
        address:
          "Hillmand St. Catalunan, Davao City, Davao del Sur, 8000, Philippines"
      },
      mediaLinks: {
        linkedIn: "https://www.linkedin.com/in/third-floor-355045190/",
        facebook: "https://business.facebook.com/thirdfloor.solutions/",
        github: "https://github.com/third-floor-solutions"
      }
    };
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/screen-size.scss";
footer {
  color: #ffffff;
  background-color: #1a202c;
  font-size: 1rem;
  position: relative;
  padding: 1.5rem 0;
}

footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/undraw/undraw_connected_world_wuay.svg");
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
}

.container {
  padding: 1.5rem;
}

.address-links {
  font-style: normal;
  display: flex;
  flex-direction: column;
  z-index: 1;
  //px-8 pt-8 pb-4 not-italic
}

.address-links a {
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  z-index: 1;
}

.address-links a:not(:last-child) {
  margin-bottom: 0.5rem;
}

.address-links a:last-child {
  margin-top: 0.5rem;
}

.email-link {
  // block font-bold text-blue-300 cursor-pointer
  font-weight: 700;
  color: #90cdf4 !important;
}

.social-media-links {
  display: flex;
  margin-top: 1.5rem;
  color: #ffffff;
}

.social-media-links a {
  color: #ffffff;
  width: 2rem;
  z-index: 1;
}



@media (min-width: $lg) {
  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
