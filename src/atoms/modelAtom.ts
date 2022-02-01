import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const modalState = atom({
  key: "modalState",
  default: false,
});

export const useModalState = () => useRecoilValue(modalState);

export const useModalMutators = () => {
  const setModalState = useSetRecoilState(modalState);

  const openModal = useCallback(() => {
    setModalState(true);
  }, [setModalState]);

  const closeModal = useCallback(() => {
    setModalState(false);
  }, [setModalState]);

  return { openModal, closeModal };
};
