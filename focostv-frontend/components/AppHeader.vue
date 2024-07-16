<template>
  <header class="focos-site-header">
    <div class="focos-site-header-container">
      <div class="focos-site-header-menu">
        <button class="focos-site-header-button">
          <font-awesome :icon="faBars" class="focos-site-header-icon" />
        </button>
      </div>
      <div class="focos-site-header-logo">
        <a href="https://www.focostv.com">
          <img
            src="http://localhost:8080/wp-content/uploads/2024/07/FocosLogoBlack.png"
            alt="focos tv logo"
          />
        </a>
      </div>
      <div class="focos-site-header-search">
        <button class="focos-site-header-button">
          <font-awesome
            :icon="faMagnifyingGlass"
            class="focos-site-header-icon"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// if (error.value) {
//   console.error('Failed to fetch menu items:', error.value)
// }
</script>
