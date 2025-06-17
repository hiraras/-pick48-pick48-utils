import { TruncateConfig, WalletAddress } from '@pick48-utils/type';
import { truncate } from '../string';

export const truncateAddress = (
  address: WalletAddress,
  config: TruncateConfig = {},
): string => {
  return truncate(address, config);
};
