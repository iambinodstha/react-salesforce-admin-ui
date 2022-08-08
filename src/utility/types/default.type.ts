export type Protocol = {
    protocol: string;
    rewards: string;
    lastTransactionDate: string;
    balance?: string;
    usdc?: string;
    ftm?: string;
    token: number;
    subRows?: Protocol[]
}