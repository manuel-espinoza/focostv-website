<template>
  <footer class="focos-site-footer">
    <div class="focos-site-footer-logo">
      <div class="focos-footer-logo">
        <img
          src="http://localhost:8080/wp-content/uploads/2024/07/FocosLogoWhite.png"
          alt="focos footer logo"
        />
      </div>
      <div class="focos-site-footer-menu">
        <ul class="footer-menu">
          <li
            class="footer-menu-item"
            v-for="menuItem in menus.primary.items"
            :key="menuItem.ID"
          >
            <NuxtLink to="/" class="menu-link primary-menu-link">{{
              menuItem.title
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="focos-site-footer-menu">
        <ul class="footer-menu">
          <li
            class="footer-menu-item"
            v-for="menuItem in menus.focostv_secondary_menu.items"
            :key="menuItem.ID"
          >
            <NuxtLink to="/" class="menu-link secondary-menu-link">{{
              menuItem.title
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="focos-site-footer-copyright">
        <p class="copyright-text">
          © Copyright 2024, FOCOS El Salvador, Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useMenu } from "@/composables/useMenu";

const { menus, error } = useMenu(["primary", "focostv_secondary_menu"]);

if (error.value) {
  console.error("Error fetching menu in footer:", error.value);
}
</script>
