import { useMemo } from "react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import {
  retrieveLaunchParams,
  useSignal,
  isMiniAppDark,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
// import { List } from "@telegram-apps/telegram-ui";
// import { CellSection } from "@/components/CellSection";
// import { FormSection } from "@/components/FormSection/FormSection";
// import { BannerSection } from "@/components/BannerSection";
// import { TimelineSection } from "@/components/TimelineSection/TimelineSection";
// import { TooltipSection } from "@/components/TooltipSection/TooltipSection";
// import { ModalSection } from "@/components/ModalSection/ModalSection";
// import { TabbarSection } from "@/components/Tabbar/Tabbar";

import { routes } from "@/navigation/routes.tsx";

export function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base"}
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
      {/* <div style={{ paddingBottom: "116px" }}>
      <List>
        <CellSection />
        <FormSection />
        <BannerSection />
        <TimelineSection />
        <TooltipSection />
        <ModalSection />
      </List>

      </div>
      <TabbarSection  /> */}
    </AppRoot>
  );
}
