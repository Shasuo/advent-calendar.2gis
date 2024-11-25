import { MainFirstScreen } from "@/components/main/mainFirstScreen/mainFirstScreen";
import { HelloText } from "./helloText/helloText";
import { OpenYourCalendar } from "./openYourCalendar/openYourCalendar";
import { GetSurprises } from "./getSurprises/getSurprises";
import { WantAHolidayNow } from "./WantAHolidayNow/WantAHolidayNow";
import { Rules } from "./rules/rules";
import { MainLinksList } from "@/components/reused/public";

export const Home = () => (
  <main>
    <MainFirstScreen text={"К заданиям"} href={MainLinksList["tasks"]} />
    <HelloText />
    <OpenYourCalendar />
    <GetSurprises />
    <WantAHolidayNow />
    <Rules />
  </main>
);
