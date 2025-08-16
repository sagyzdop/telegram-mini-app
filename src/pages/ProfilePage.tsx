// src/pages/EventsPage.tsx
import { FC } from "react";
import { Page } from "@/components/Page";
import {
  Avatar,
  Button,
  Caption,
  Cell,
  List,
  Section,
} from "@telegram-apps/telegram-ui";
import { Link } from "@/components/Link/Link.tsx";
import { Text } from "@telegram-apps/telegram-ui";

export const ProfilePage: FC = () => {
  return (
    <Page back={false}>
      <List className="bg-(--tgui--secondary_bg_color)">
        <div className="flex flex-col items-center text-center gap-y-4">
          <Avatar
            size={96}
            src="https://avatars.githubusercontent.com/u/84640980?v=4"
          />
          <div className="flex flex-col text-center">
            <Text weight="1">Hi, Name Surname</Text>
            <Caption level="1" weight="3">
              example@nu.edu.kz
            </Caption>
          </div>
        </div>

        <Section header="My Current">
          <Link to="/init-data">
            <Cell subtitle="Events created by you.">My Events</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Communities created by you.">My Communities</Cell>
          </Link>
        </Section>
        <Section header="Subscriptions">
          <Link to="/init-data">
            <Cell subtitle="Events you attending.">Attending</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Communities you follow.">Communities</Cell>
          </Link>
        </Section>
        <div className="p-[16px]">
          <Button mode="filled" size="l" stretched>
            Logout
          </Button>
        </div>
      </List>
    </Page>
  );
};
