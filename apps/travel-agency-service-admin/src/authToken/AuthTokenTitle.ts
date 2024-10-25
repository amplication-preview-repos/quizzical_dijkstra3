import { AuthToken as TAuthToken } from "../api/authToken/AuthToken";

export const AUTHTOKEN_TITLE_FIELD = "id";

export const AuthTokenTitle = (record: TAuthToken): string => {
  return record.id?.toString() || String(record.id);
};
