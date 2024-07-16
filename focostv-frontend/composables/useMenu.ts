import { ref } from 'vue';
import { useFetch, useRuntimeConfig } from '#app';

interface MenuItem {
  ID: number;
  title: string;
  url: string;
}

interface Menus {
  [key: string]: MenuItem[];
}

const menus = ref<Menus>({});
const error = ref<string | null>(null);

export const useMenu = (menuSlugs: string[]) => {
  const config = useRuntimeConfig();

  // Check which menus are not yet fetched
  const fetchMenus = async () => {
    const fetchPromises = menuSlugs.map(async (menuSlug) => {
      if (!menus.value[menuSlug]) {
        try {
          const { data, error: fetchError } = await useFetch<MenuItem[]>(
            `${config.public.wpBaseUrl}/menus/v1/menus/${menuSlug}`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          if (fetchError.value) {
            throw new Error(fetchError.value as any);
          }
          menus.value[menuSlug] = data.value!;
        } catch (err) {
          const e = err as Error;
          error.value = e.message;
          console.error(`Failed to fetch menu ${menuSlug}:`, e.message);
        }
      }
    });

    await Promise.all(fetchPromises);
  };

  fetchMenus();

  return {
    menus,
    error,
  };
};