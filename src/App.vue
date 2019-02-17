<template>
  <div id="app" class="bg-grey-lighter">

    <nav class="flex items-center justify-between flex-wrap  text-2xl p-6">
      <!-- <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div> -->
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-black border-teal-light hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="lg:flex-grow">
           <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange mr-4"
            to="/"
          >Home</router-link>
          <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange mr-4"
            to="/past"
          >Stuff I've done</router-link>

          <router-link
            to="/present"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange mr-4"
          >
            Stuff I do
          </router-link>

          <router-link
            to="/likes"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange"
          >
            Stuff I like
          </router-link>
        </div>
        <!-- <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >Download</a>
        </div> -->
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
