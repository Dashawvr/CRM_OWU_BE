import {RateLimit} from '../constants';

export const rateLimitOptions = {
  windowMs: RateLimit.MINUTES * RateLimit.SECONDS * RateLimit.MILLISECONDS,
  max: 1000
};
