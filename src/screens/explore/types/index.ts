import { IconType } from "@/components/base/Icon";

export interface FilterType {
  id?: number | string;
  name: string;
  param: string;
  icon?: IconType
}