import Overview from "./pages/Overview.vue";
import Create from "./pages/CreateAuthor.vue";

export const authorRoutes = [
    { path: "/authors", component: Overview, name: "authors.overview" },
    { path: "/authors/create", component: Create, name: "authors.create" },
];
