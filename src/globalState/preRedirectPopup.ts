import { atom } from "jotai";

export interface Promo {
  title: string;
  code: string;
  subtitle: string;
  image: string;
  conditions: string;
}
export interface PreRedirectPopup {
  title: string;
  text: string;
  button: { href: string; text: string };
  promo?: Promo;
}
interface ID {
  id: number;
  token: string;
}
export interface PreRedirectPopupContent extends ID, PreRedirectPopup {}
export const PreRedirectPopup = atom<PreRedirectPopupContent>({
  title: "",
  text: "",
  button: { href: "", text: "" },
  id: -1,
  token: "",
});
