import pl from "./messages/pl.json";

type Messages = typeof pl;

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;
}
