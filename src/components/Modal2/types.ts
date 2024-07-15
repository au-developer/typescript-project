import { ReactNode } from "react";

export interface Modal2Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
