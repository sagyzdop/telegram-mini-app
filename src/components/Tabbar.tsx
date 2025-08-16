// Tabbar.tsx
import { Tabbar } from "@telegram-apps/telegram-ui";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "@/navigation/routes";

export const TabbarSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Choose which routes should appear in the tabbar
  const tabRoutes = routes.filter(r => r.showInTabbar);

  return (
    <Tabbar className="!pb-[24px]">
      {tabRoutes.map(({ path, title, icon }) => (
        <Tabbar.Item
          key={path}
          text={title}
          selected={location.pathname === path}
          onClick={() => navigate(path)}
        >
          {icon}
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};
