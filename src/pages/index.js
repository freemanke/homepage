import useSWR from "swr";
import Head from "next/head";
import dynamic from "next/dynamic";

import { ThemeProvider } from "utils/theme-context";

import ServicesGroup from "components/services/group";
import BookmarksGroup from "components/bookmarks/group";
import Widget from "components/widget";
import { ColorProvider } from "utils/color-context";

const ThemeToggle = dynamic(() => import("components/theme-toggle"), {
  ssr: false,
});

const ColorToggle = dynamic(() => import("components/color-toggle"), {
  ssr: false,
});

const rightAlignedWidgets = ["weatherapi", "openweathermap", "weather"];

export default function Home() {
  const { data: services, error: servicesError } = useSWR("/api/services");
  const { data: bookmarks, error: bookmarksError } = useSWR("/api/bookmarks");
  const { data: widgets, error: widgetsError } = useSWR("/api/widgets");

  return (
    <ColorProvider>
      <ThemeProvider>
        <Head>
          <title>Home</title>
        </Head>
        <div className="w-full container m-auto flex flex-col h-screen justify-between">
          {services && (
            <div className="flex flex-wrap p-8 items-start">
              {services.map((group) => (
                <ServicesGroup key={group.name} services={group} />
              ))}
            </div>
          )}
          <div className="rounded-full flex p-8 w-full justify-between">
            <ColorToggle />
            <ThemeToggle />
          </div>
        </div>
      </ThemeProvider>
    </ColorProvider>
  );
}
