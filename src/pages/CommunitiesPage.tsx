import {
  // Section,
  Cell,
  Image,
  // List,
  Divider,
  Avatar,
  Badge,
  Input,
  List,
} from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";
import { Page } from "@/components/Page.tsx";
import { Icon24SunLow } from "@telegram-apps/telegram-ui/dist/icons/24/sun_low";

export const CommunitiesPage: FC = () => {
  return (
    <Page back={false}>
      <Input placeholder="Search Communities" before={<Icon24SunLow />} />
      <List>
        {/* <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        > */}
        <Divider />
        <Link to="/ton-connect">
          <Cell
            after={<Badge type="number">4</Badge>}
            before={<Avatar size={48} />}
            description="We are the club that does fencing."
            interactiveAnimation="background"
            subtitle="Subtitle"
          >
            NU Fencing Club
          </Cell>
        </Link>
        <Divider />
        <Link to="/ton-connect">
          <Cell
            after={<Badge type="number">4</Badge>}
            before={<Avatar size={48} />}
            description="We are the club that does fencing."
            interactiveAnimation="background"
            subtitle="Subtitle"
          >
            NU Fencing Club
          </Cell>
        </Link>
        <Divider />
        <Link to="/ton-connect">
          <Cell
            after={<Badge type="number">4</Badge>}
            before={<Avatar size={48} />}
            description="We are the club that does fencing."
            interactiveAnimation="background"
            subtitle="Subtitle"
          >
            NU Fencing Club
          </Cell>
        </Link>
        <Divider />
      </List>
    </Page>
  );
};
