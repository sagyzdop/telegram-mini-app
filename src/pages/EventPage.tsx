// src/pages/EventsPage.tsx
import { FC } from "react";
import { Page } from "@/components/Page";
import { Card, List, Section } from "@telegram-apps/telegram-ui";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { CardsScroller } from "@/components/CardsScroller";
import { mockEvents } from "@/data/mockEvents";
import { TelegramSearchBar } from "@/components/SearchBar";

export const EventsPage: FC = () => {
  return (
    <Page back={false}>
      <List className="bg-(--tgui--secondary_bg_color)">
      <TelegramSearchBar />
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

        <Section header="Today's Events">
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

        <Section header="Week">
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
      </List>
    </Page>
  );
};
