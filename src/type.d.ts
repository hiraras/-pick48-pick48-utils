export type Obj = Record<string, any>;

export type WalletAddress = `0x${string}`;

export type ContractAddress = `0x${string}`;

export type TruncateConfig = {
  start?: number;
  end?: number;
  replaceValue?: string;
};
