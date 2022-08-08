import { Protocol } from "../types"

const subRowProperty = {
    protocol: "Cemetery V2 Staking",
    usdc: "105,953.96",
    ftm: "105,953.96",
    rewards: "0.19 LSHARE ($121)",
    token: 5,
    lastTransactionDate: "10/16/2020 23:43:23"
};

let subRows = new Array(8).fill(subRowProperty)

const protocol: Protocol[] = [
    {
        protocol: "Tomb",
        balance: "$1,254,345.34",
        rewards: "$4,345.34",
        lastTransactionDate: "10/16/2020 23:43:23",
        token: 5,
        subRows
    },
    {
        protocol: "Aave",
        balance: "$1,254,345.34",
        rewards: "$4,345.34",
        lastTransactionDate: "10/16/2020 23:43:23",
        token: 5,
        subRows
    },
    {
        protocol: "Balancer",
        balance: "$1,254,345.34",
        rewards: "$4,345.34",
        lastTransactionDate: "10/16/2020 23:43:23",
        token: 5,
        subRows
    },
];

export const protocolLists: Protocol[] = [...new Array(10).fill(undefined).map((_, index)=> protocol[index % 3])]