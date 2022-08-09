import Defi from "../../pages/defi";
import Exchange from "../../pages/exchanges";
import DEFIOverview from "../../pages/defi/Overview";
import ExchangeOverview from "../../pages/exchanges/Overview";
import DefaultPage from "../../pages/DefaultPage";

export const defiRouteLists = [
    { id: "1", path: "overview", element: DEFIOverview },
    { id: "2", path: "protocol", element: DefaultPage },
    { id: "3", path: "transaction-history", element: DefaultPage },
    { id: "5", path: "chain", element: DefaultPage },
    { id: "6", path: "assets", element: DefaultPage },
    { id: "7", path: "snapshot", element: DefaultPage },
    { id: "8", path: "more", element: DefaultPage }
];

export const exchangesRouteLists = [
    { id: "1", path: "overview", element: ExchangeOverview },
    { id: "2", path: "transaction", element: DefaultPage },
    { id: "3", path: "spot-balance", element: DefaultPage },
    { id: "4", path: "future-balance", element: DefaultPage },
    { id: "5", path: "exchange", element: DefaultPage },
    { id: "6", path: "add-exchange", element: DefaultPage },
];

export const routeLists = [
    {
        exact: true,
        path: 'home',
        element: DefaultPage
    },
    {
        exact: true,
        path: 'defi',
        element: Defi,
        subRouteLists: defiRouteLists
    },
    {
        exact: true,
        path: 'exchange',
        element: Exchange,
        subRouteLists: exchangesRouteLists
    },
    {
        exact: true,
        path: 'dashboard',
        element: DefaultPage
    },
    {
        exact: true,
        path: 'assets',
        element: DefaultPage
    },
    {
        exact: true,
        path: 'reports',
        element: DefaultPage
    },
    {
        exact: true,
        path: 'snapshots',
        element: DefaultPage
    },
    {
        exact: true,
        path: 'clients',
        element: DefaultPage
    },
]