import { IconType } from "react-icons";

import { RxQuote } from "react-icons/rx";
import { RiHome7Line } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { MdOutlinePhoto, MdOutlineChangeHistory } from "react-icons/md";

export interface SideListItem {
  icon: IconType;
  path: string;
  isActive: boolean;
}

const sideList: SideListItem[] = [
  {
    icon: RiHome7Line,
    path: "/",
    isActive: true,
  },
  {
    icon: HiOutlineDocument,
    path: "/posts",
    isActive: true,
  },
  {
    icon: RxQuote,
    path: "/quotes",
    isActive: false,
  },
  {
    icon: MdOutlinePhoto,
    path: "/photos",
    isActive: false,
  },
  {
    icon: MdOutlineChangeHistory,
    path: "/stories",
    isActive: false,
  },
];

export default sideList;
