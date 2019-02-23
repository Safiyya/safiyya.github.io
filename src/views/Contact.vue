<template>
  <div class="texture-background text-white contact py-24 h-full flex px-4 md:px-8">

    <div class="flex flex-col sm:flex-row justify-around sm:justify-between items-center container mx-auto">
      <div class="w-4/5 sm:w-1/3 box md:mx-auto">
        <picture>
          <source srcset="@/assets/images/profile_fit.webp">
          <img
            src="@/assets/images/profile_fit.jpg"
            class="content rounded-full"
          >
        </picture>
      </div>
      <div class="w-full sm:w-1/2 flex flex-col justify-center items-center align-start">
        
          <span class="text-xl sm:text-2xl md:text-3xl my-4">I want to be involved in projects that make a difference with people who are inhabited with a mission. </span>

          <a
            class="button bg-teal text-base my-auto uppercase"
            href="mailto:hello@safiyya.io"
          >
            Let's work together
          </a>
      </div>

    </div>

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

