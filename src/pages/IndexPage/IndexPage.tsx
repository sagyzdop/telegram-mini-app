import {
  Avatar,
  Section,
  Cell,
  Badge,
  List,
  Divider,
  Card,
  Headline,
} from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";
import { Page } from "@/components/Page.tsx";
import { CardsScroller } from "@/components/CardsScroller";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { mockEvents } from "@/data/mockEvents";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className="text-center p-[16px]">
        
      <Headline weight="1">Campus Current</Headline>
      </div>
      <List>
        <Section header="Featured Events">
          <CardsScroller>
            {mockEvents.map((event) => (
              <Card key={event.id} className="min-w-[254px]">
                <CardChip readOnly>{event.chip}</CardChip>
                <img
                  alt={event.title}
                  src={event.image}
                  style={{
                    display: "block",
                    height: 308,
                    objectFit: "cover",
                    width: 254,
                  }}
                />
                <CardCell readOnly subtitle={event.subtitle}>
                  {event.title}
                </CardCell>
              </Card>
            ))}
          </CardsScroller>
        </Section>
        <Section header="Featured Communities">
          <Link to="/ton-connect">
            <Cell
              after={<Badge type="number">4</Badge>}
              before={<Avatar size={48} />}
              description="We are the club that does fencing."
              interactiveAnimation="background"
              subtitle="Academic Club"
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
              subtitle="Academic Club"
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
              subtitle="Academic Club"
            >
              NU Fencing Club
            </Cell>
          </Link>
          <Divider />
        </Section>
      </List>
    </Page>
  );
};
