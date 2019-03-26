<template>
  <form
    accept-charset="UTF-8"
    action="https://usebasin.com/f/1f35ec725245"
    enctype="multipart/form-data"
    method="POST"
  >

    <div class="flex flex-wrap -mx-3 mb-3">

      <div class="w-full">
        <div class="form-group w-full xl:w-1/2">
          <label for="email-address">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          >
        </div>
      </div>
      <div class="w-full">
        <div class="form-group w-full xl:w-1/2">
          <label for="company">Company/Organization name</label>
          <input
            type="text"
            id="company"
            name="company"
          >
          <div class="flex">

            <input
              type="checkbox"
              name="charity"
              id="charity"
            >
            <label
              for="charity"
              class="mx-1 normal-case"
            >This is a non-profit or a charity</label>

          </div>

        </div>
      </div>

      <div class="w-full xl:w-1/4 form-group relative">
        <label for="project-type">I need a ...</label>
        <select>
          <option value="Web development">Website developed</option>
          <option value="Web design">Website designed</option>
          <option value="Web design">Website designed and developed</option>
          <option value="Data visualisation">Data visualisation </option>
          <option value="Database/API">Database or API work</option>
          <option value="Testing">Unit Testing improvements </option>
        </select>
        <div class="pointer-events-none absolute pin-b pin-r flex items-center px-4 text-grey-darker h-12">
          <simple-svg
            class="fill-current h-4 w-4"
            :filepath="require('@/assets/icons/chevron-down.svg')"
            :width="'100%'"
            :height="'100%'"
          />
        </div>
      </div>
      <div class="w-full xl:w-1/4 form-group relative">
        <label for="project-deadline">My deadline is</label>
        <select>
          <option value="Immeditely">Immediately</option>
          <option value="within 1 month">Within the month </option>
          <option value="within 3 months">In the next 3 months</option>
          <option value="within 6 months">In the next 6 months </option>
          <option value="I don't know">I don't know</option>
        </select>
        <div class="pointer-events-none absolute pin-b pin-r flex items-center px-4 text-grey-darker h-12">
          <simple-svg
            class="fill-current h-4 w-4"
            :filepath="require('@/assets/icons/chevron-down.svg')"
            :width="'100%'"
            :height="'100%'"
          />
        </div>
      </div>

      <div class="w-full xl:w-1/2 form-group">
        <label for="project-budget">Budget</label>
        <div class="flex flex-col items-start xl:flex-row h-full xl:items-center text-sm xl:text-base">
          <span>
            <input
              type="radio"
              name="project-budget"
              value="low"
            > Under $5000
          </span>
          <span>
            <input
              type="radio"
              name="project-budget"
              value="medium"
            > Between $5000 and $10000
          </span>

          <span>
            <input
              type="radio"
              name="project-budget"
              value="high"
            > Above $10000
          </span>

        </div>

      </div>
      <div class="mt-8 w-full flex flex-wrap">

        <div class="form-group w-full">
          <label for="comment">Project details</label>

          <textarea
            rows="4"
            cols="50"
            name="comment"
            class="no-resize"
          > </textarea>

          <input
            type="hidden"
            id="gotcha"
            name="_gotcha"
          >
        </div>
      </div>

    </div>
    <div class="w-full flex justify-center">
      <button
        class="primary"
        type="submit"
      >Send</button>
    </div>

  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ContactForm extends Vue {
  /*
 
    */
}
</script>

<style>
.form-group {
  @apply flex flex-col px-3 my-3;
}

label {
  @apply uppercase text-sm text-grey mb-2;
}

textarea.no-resize {
  resize: none;
}

input[type="text"],
input[type="email"],
textarea {
  @apply appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary rounded py-3 px-4 mb-3 leading-tight;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  @apply outline-none bg-white;
}

input[type="radio"] {
  @apply ml-4 mr-1;
}

input[type="radio"]:first-of-type {
  @apply ml-0;
}

select {
  @apply block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight;
}

select:focus {
  @apply outline-none bg-white border-grey;
}
</style>
