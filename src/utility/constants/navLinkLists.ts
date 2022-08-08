import { ReactComponent as OverviewIcon } from '../../assets/svg/overview.svg';
import { ReactComponent as TransactionsIcon } from '../../assets/svg/transactions.svg';
import { ReactComponent as ProtocolsIcon } from '../../assets/svg/protocols.svg';
import { ReactComponent as ExchangeIcon } from '../../assets/svg/exchange.svg';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';

export const defiNavLinkLists = [
    { id: "1", label: "Overview", to: "overview", icon: OverviewIcon },
    { id: "2", label: "Protocols", to: "protocol", icon: TransactionsIcon },
    { id: "3", label: "Transactions History", to: "transaction-history", icon: ProtocolsIcon },
    { id: "5", label: "Chain", to: "chain", icon: ExchangeIcon },
    { id: "6", label: "Assets", to: "assets", icon: AddIcon },
    { id: "7", label: "Snapshots", to: "snapshot", icon: AddIcon },
    { id: "8", label: "More", to: "more", icon: AddIcon },
];

export const exchangesNavLinkLists = [
    { id: "1", label: "Overview", to: "overview", icon: OverviewIcon },
    { id: "2", label: "Transactions", to: "transaction", icon: TransactionsIcon },
    { id: "3", label: "Spot balances", to: "spot-balance", icon: ProtocolsIcon },
    { id: "4", label: "Future Balances", to: "future-balance", icon: ProtocolsIcon },
    { id: "5", label: "Exchanges", to: "exchange", icon: ExchangeIcon },
    { id: "6", label: "Add Exchange", to: "add-exchange", icon: AddIcon },
];

export const navLinkLists = [
    { id: "1", label: "Home", to: "/home" },
    { id: "2", label: "DeFi", to: "/defi", subNavLists: defiNavLinkLists },
    { id: "3", label: "Exchanges", to: "/exchange", subNavLists: exchangesNavLinkLists },
    { id: "4", label: "Dashboards", to: "/dashboard" },
    { id: "5", label: "Assets", to: "/assets" },
    { id: "6", label: "Reports", to: "/reports" },
    { id: "7", label: "Snapshots", to: "/snapshots" },
    { id: "8", label: "Clients", to: "/clients" },
];