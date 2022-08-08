import { ReactComponent as OverviewIcon } from '../../assets/svg/overview.svg';
import { ReactComponent as TransactionsIcon } from '../../assets/svg/transactions.svg';
import { ReactComponent as ProtocolsIcon } from '../../assets/svg/protocols.svg';
import { ReactComponent as ExchangeIcon } from '../../assets/svg/exchange.svg';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';

export const defiNavLinks = [
    { id: "1", name: "Overview", icon: OverviewIcon },
    { id: "2", name: "Protocols", icon: TransactionsIcon },
    { id: "3", name: "Transactions History", icon: ProtocolsIcon },
    { id: "5", name: "Chain", icon: ExchangeIcon },
    { id: "6", name: "Assets", icon: AddIcon },
    { id: "7", name: "Snapshots", icon: AddIcon },
    { id: "8", name: "More", icon: AddIcon },
];

export const exchangesNavLinks = [
    { id: "1", name: "Overview", icon: OverviewIcon },
    { id: "2", name: "Transactions", icon: TransactionsIcon },
    { id: "3", name: "Spot balances", icon: ProtocolsIcon },
    { id: "4", name: "Future Balances", icon: ProtocolsIcon },
    { id: "5", name: "Exchanges", icon: ExchangeIcon },
    { id: "6", name: "Add Exchange", icon: AddIcon },
];

export const navLinks = [
    { id: "1", name: "Home" },
    {
        id: "2", name: "DeFi",
        subNavLinks: defiNavLinks
    },
    {
        id: "3", name: "Exchanges",
        subNavLinks: exchangesNavLinks
    },
    { id: "4", name: "Dashboards" },
    { id: "5", name: "Assets" },
    { id: "6", name: "Reports" },
    { id: "7", name: "Snapshots" },
    { id: "8", name: "Clients" },
];