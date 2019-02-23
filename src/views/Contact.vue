<template>
  <div class="texture-background text-white contact py-24 h-full flex">

    <div class="flex lg:flex-row flex-col justify-center items-center container mx-auto">
      <div class="box lg:w-2/5 w-64 mx-8">
        <img
          class="content rounded-full"
          src="@/assets/images/profile_fit.png"
          alt=""
        >
      </div>
       <div class="lg:w-3/5 flex flex-col justify-center items-center align-start">

      <span class="text-3xl my-4">I want to be involved in projects that make a difference with people who are inhabited with a mission. </span>

      <a
        class="button bg-teal text-xl my-16"
        href="mailto:hello@safiyya.io"
      >
        Let's work together
      </a>
       </div>
    </div>


    <!-- <a href="mailto:info@example.com?bcc=mail2@example.com
  &body=these%20mailto%0Alinks%20are%0Acool">
      mailto links
    </a> -->

  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badge from "@/components/Badge.vue";

@Component({
  components: {
    badge: Badge
  }
})
export default class Contact extends Vue {
  faq: Array<{ question: string; answer: string }> = [
    {
      question: "Where can I see your work?",
      answer: "This "
    },
    {
      question: "Are you currently available?",
      answer: "Yes! Email me about your project and we can take it from there."
    },
    {
      question: "How much do you charge?",
      answer:
        "It really depends on the scope of your project. I have a discount price for charities and non-profit "
    },
    {
      question: "What kind of work are you looking for?",
      answer: ""
    }
  ];
}
</script>

<style scoped>
</style>

