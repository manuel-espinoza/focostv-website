<template>
  <nav class="focos-site-navigation">
    <ul class="focos-site-navigation-menu">
      <li
        class="focos-site-navigation-menu-item"
        v-for="navItem in menus.primary.items"
        :key="navItem.ID"
      >
        <NuxtLink to="/" class="focos-site-navigation-item">{{
          navItem.title
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useMenu } from "@/composables/useMenu";

const { menus, error } = useMenu(["primary"]);

if (error.value) {
  console.error("Error fetching menu in navigation:", error.value);
}
</script>
