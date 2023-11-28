import LinkLayout from "./layouts/LinkLayout";
import HomePage from "./pages/HomePage";
import ParamPage from "./pages/ParamPage";
import AboutCharacter from "./pages/AboutCharacter";

// const router = [
//   {
//     element: <LinkLayout />,
//     path: "/",
//     children: [
//       {
//         element: <HomePage />,
//         index: true,
//       },
//       {
//         element: <MainPage />,
//         path: "/main",
//       },
//       {
//         element: <AboutPage />,
//         path: "/about",
//       },
//     ],
//   },
//   {
//     element: <ParamPage />,
//     path: "/users/:id",
//   },
//   {
//     element: <ErrorPage />,
//     path: "*",
//   },
// ];


const router = [
    {
        element: <LinkLayout />,
        path: '/',
        children: [
            {
                element: <HomePage />,
                index: true
            },
            {
                element: <AboutCharacter/>,
                path: "/about"
            }
        ]
    },
    {
        element: <ParamPage/>,
        path: "/:factId"
    }
]

export default router;
