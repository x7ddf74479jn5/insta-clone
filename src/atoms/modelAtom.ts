import { atom, useRecoilCallback, useRecoilValue } from "recoil";

const modalState = atom({
  key: "modalState",
  default: false,
});

export const useModalState = () => useRecoilValue(modalState);

export const useModalMutators = () => {
  const openModal = useRecoilCallback(
    ({ set }) =>
      () =>
        set(modalState, () => true)
  );

  const closeModal = useRecoilCallback(
    ({ set }) =>
      () =>
        set(modalState, () => false)
  );

  return { openModal, closeModal };
};
