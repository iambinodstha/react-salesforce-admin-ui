import DefaultPage from "../../pages/DefaultPage";
import Defi from "../../pages/defi";
import Exchange from "../../pages/exchanges";

export const defiRouteLists = [
    { id: "1", path: "/defi/overview", element: Defi },
    { id: "2", path: "/defi/protocol", element: DefaultPage },
    { id: "3", path: "/defi/transactions-history", element: DefaultPage },
    { id: "5", path: "/defi/chain", element: DefaultPage },
    { id: "6", path: "/defi/assets", element: DefaultPage },
    { id: "7", path: "/defi/snapshot", element: DefaultPage },
    { id: "8", path: "/dei/more", element: DefaultPage }
];

export const exchangesRouteLists = [
    { id: "1", path: "/exchange/overview", element: Exchange },
    { id: "2", path: "/exchange/transaction", element: DefaultPage },
    { id: "3", path: "/exchange/spot-balance", element: DefaultPage },
    { id: "4", path: "/exchange/future-balance", element: DefaultPage },
    { id: "5", path: "/exchange/exchange", element: DefaultPage },
    { id: "6", path: "/exchange/add-exchange", element: DefaultPage },
];

export const routeLists = [
    {
        exact: true,
        path: '/home',
        element: DefaultPage
    },
    ...defiRouteLists,
    ...exchangesRouteLists,
    {
        exact: true,
        path: '/dashboard',
        element: DefaultPage
    },
    {
        exact: true,
        path: '/assets',
        element: DefaultPage
    },
    {
        exact: true,
        path: '/reports',
        element: DefaultPage
    },
    {
        exact: true,
        path: '/snapshots',
        element: DefaultPage
    },
    {
        exact: true,
        path: '/clients',
        element: DefaultPage
    },
]