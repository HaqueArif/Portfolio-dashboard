import { FormEvent } from "react";

// ourService section
export type Detail = {
  description: string;
  distribution: string;
  donation: string;
};
export type ServiceData = {
  image: string;
  title: string;
  category: string;
  amount: string;
  description: string;
};

export type ServiceCardProps = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  description: string;
};

export type TEventItem = {
  _id: string;
  item: string;
};
export type TImageProps = {
  thumbnail: string | undefined;
};

export type RecentEvent = {
  item: string;
};

export type RecentEventsGalleryProps = {
  recentEvents: RecentEvent[];
};
export type TGalleryFrameProps = {
  star: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  img9: string;
  img10: string;
};

export type DestructuredData = {
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
};

export type TestimonialItem = {
  id: number;
  userName: string;
  title: string;
  testimonial: string;
  image: string;
};

export type IdProps = {
  id: string;
};
export type EventItemType = {
  item: {
    item: string;
    _id: string;
  };
};

export type UpdateEventProps = {
  item: string;
  itemId: string;
};

export type TEventData = {
  item: string | void;
};

export type NavlinkProps = {
  to: string;
  label: string;
};

export type EventProps = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  details: Detail[];
};

// form

export type EventFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
};

// dashboard sidebar

export type SidebarComponentProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};
