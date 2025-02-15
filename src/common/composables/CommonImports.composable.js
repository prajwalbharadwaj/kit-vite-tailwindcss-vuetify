import { useRoute, useRouter } from "vue-router";

export function useCommonImports() {
  const route = useRoute();
  const router = useRouter();

  return {
    route,
    router
  };
}
