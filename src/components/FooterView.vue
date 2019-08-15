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
        <a :href="mediaLinks.linkedin" target="_blank" class="w-8 cursor-pointer">
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
footer {
  color: #ffffff;
  background-color: #1a202c;
  font-size: 1rem;
}

.container {
  padding: 1.5rem;
}

.address-links {
  font-style: normal;
  display: flex;
  flex-direction: column;
  //px-8 pt-8 pb-4 not-italic
}

.address-links a {
  text-decoration: none;
  color: #ffffff;
}

.address-links a:last-child {
  margin-top: 0.25rem;
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
}
</style>