interface ItemProps {
  id: number;
  text: string;
  status: boolean;
  day: string;
}

interface ArrayProps {
  todolist: Array<{
    id: number;
    text: string;
    status: boolean;
    day: string;
  }>;
  searchResults?: Array<{
    id: number;
    text: string;
    status: boolean;
    day: string;
  }>;
  searching?: boolean;
  sortType?: string;
  error?: string
}

interface PopupProps {
  isActivePopup: boolean;
  item: number | null;
  closePopup: () => void;
}

export type { ItemProps, ArrayProps, PopupProps };