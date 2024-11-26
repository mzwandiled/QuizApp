import {createRouter,createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: "/",
            name: "quizzes",
            component: () => import("../views/QuizView.vue")
        },

    ]
})

export default router;