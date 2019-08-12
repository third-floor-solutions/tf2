<template>
  <div class="site-banner h-screen flex flex-col items-center justify-center px-10">
    <img class="tf-image w-64" src="/img/67412323_495283111250152_9004867031664689152_n.png" />
    <h1 class="text-5xl font-black">ThirdFloor</h1>
    <h2 class="text-2xl font-bold -mt-5 mb-3 have-some-space">solutions</h2>
    <p
      class="text-gray-700 leading-snug font-medium text-center"
    >A fast and growing software company, that build fast, elegant and high quality products.</p>
    <!-- <p class="text-2xl leading-snug font-medium text-center">We bring ideas into reality.</p> -->

    <!-- <p
        class="text-center leading-snug"
    >Engage with us now, and let's start making your ideas into reality.</p>-->
    <a
      @click="showDialog = true"
      class="bg-yellow-500 text-yellow-100 font-bold uppercase shadow mt-10 py-3 px-8 rounded cursor-pointer"
    >Partner with us</a>
  </div>
</template>
