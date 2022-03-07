/**
 * To understand the routes we need to thing of the parts of the application
 * Every application has some publicly accessible routes
 *
 * PUBLIC
 * These are the routes that are not protected by a login
 *
 * PRE_AUTHENTICATED
 * Some are Pre Authentication Routes (Protected Routes, if logged in, not visible)
 *
 * AUTHENTICATED
 * Some are Post Authentication Routes (Protected Routes, if logged in, visible)
 */

import { lazy } from "react";

export default {
  PUBLIC: [
    {
      path: "/404",
      component: lazy(() => import("../pages/public/NotFound/NotFound")),
    },
  ],
  AUTHENTICATED: [
    {
      path: "/",
      component: lazy(() => import("../pages/authenticated/Home/Home")),
    },
  ],
  PRE_AUTHENTICATED: [
    {
      path: "/login",
      component: lazy(() => import("../pages/pre_authenticated/Login/Login")),
    },
  ],
};
