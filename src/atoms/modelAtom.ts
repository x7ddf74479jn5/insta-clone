import { atom, useRecoilState } from "recoil";

const modalState = atom({
  key: "modalState",
  default: false,
});

export const useModalState = () => useRecoilState(modalState);
