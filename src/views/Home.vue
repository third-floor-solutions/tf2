<template>
  <div class="home">
    <Banner />
    <SectionOne>
      <template v-slot:title>We love to see you succeed</template>
      <template v-slot:img>
        <img src="/undraw/undraw_business_deal_cpi9.svg" />
      </template>
      <p>From showing you how easy it is to connect with us, to answering any concerns you may have, we are there to assist in every way necessary.</p>
      <p>Our team are extremely reliable due to our carefully honed processes. Most of the service calls and emails we attend to are related to the partnership you can trust – and we’ll do the best way possible as desired.</p>
    </SectionOne>
    <SectionTwo>
      <template v-slot:title>Mobile or Web?</template>
      <template v-slot:img>
        <img src="/undraw/undraw_web_devices_ad58.svg" />
      </template>
      <p>Our bread and butter is the responsive web design. We create 100% web design that is completely custom to cater to your businesses exact message and needs. A great experience that your website is vital for your visitors no matter what device they’re on.</p>
    </SectionTwo>
    <SectionOne>
      <template v-slot:title>Modern problems, modern solution</template>
      <template v-slot:img>
        <img src="/undraw/undraw_user_flow_vr6w.svg" />
      </template>
      <p>
        Our team uses one of the best technologies on the wild,
        yet ensuring the right tool for the job.
      </p>
    </SectionOne>
    <SectionTwo>
      <template v-slot:title>Teamwork and Collaboration</template>
      <template v-slot:img>
        <img src="/undraw/undraw_co-working_825n.svg" />
      </template>
      <p>Your product will start taking shape and rapid prototyping. Through collaborative and integrated process and development enables us to make quick, pursuit adjustments based on user and clients feedback software product that people love to use and that delivers clear business outcomes.</p>
    </SectionTwo>
    <Services />
    <GetStarted />
    <FooterView />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import Services from "@/components/Services";
import FooterView from "@/components/FooterView";
import GetStarted from "@/components/GetStarted";

export default {
  name: "home",
  components: {
    Banner,
    SectionOne,
    SectionTwo,
    Services,
    FooterView,
    GetStarted
  }
};
</script>
