// src/data/mockEvents.ts
export interface Event {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    chip: string;
  }
  
  export const mockEvents: Event[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    subtitle: `Location ${i + 1}`,
    chip: i % 2 === 0 ? "Hot Place" : "Featured",
    image: "https://i.imgur.com/892vhef.jpeg", // same image for now
  }));
  