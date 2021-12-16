import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { Fragment, useRef, useState } from "react";
import { useModalState } from "src/atoms/modelAtom";
import { db, storage } from "src/lib/firebase";

export const Modal = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useModalState();
  const handleOpenModal = () => setIsOpen(false);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const captionRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFilePicker = () => {
    filePickerRef.current && filePickerRef.current.click();
  };

  const handleUploadPost = async () => {
    if (isLoading || !selectedFile) return;

    setIsLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: session?.user.username,
      caption: captionRef?.current?.value,
      profileImg: session?.user.image,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(async (_snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });

    setIsOpen(false);
    setIsLoading(false);
    setSelectedFile(null);
  };

  const handleAddImageToPost: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (!readerEvent?.target?.result) return;
      if (typeof readerEvent.target.result === "string") {
        setSelectedFile(readerEvent.target.result);
      }
    };
  };

  const handleResetImage = () => setSelectedFile(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={handleOpenModal}>
        <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-[800px] text-center sm:block sm:p-0 sm:min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block overflow-hidden px-4 pt-5 pb-4 text-left align-bottom bg-white rounded-lg shadow-xl transition-all transform sm:p-6 sm:my-8 sm:w-full sm:max-w-sm sm:align-middle">
              <div>
                {selectedFile ? (
                  <button onClick={handleResetImage}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedFile} className="object-contain w-full cursor-pointer" alt="" />
                  </button>
                ) : (
                  <div className="flex justify-center items-center mx-auto w-12 h-12 bg-red-100 rounded-full cursor-pointer">
                    <button onClick={handleFilePicker}>
                      <CameraIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                    </button>
                  </div>
                )}

                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Upload a Photo
                    </Dialog.Title>
                  </div>
                  <div>
                    <input type="file" ref={filePickerRef} hidden onChange={handleAddImageToPost} />
                  </div>
                  <div className="mt-2">
                    <input
                      className="w-full text-center border-none focus:ring-0"
                      type="text"
                      ref={captionRef}
                      placeholder="Please enter a caption..."
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    disabled={!selectedFile}
                    onClick={handleUploadPost}
                    className="inline-flex justify-center py-2 px-4 w-full text-base font-medium text-white disabled:text-gray-300 bg-red-600 hover:bg-red-700 hover:disabled:bg-gray-300 rounded-md border border-transparent focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-sm disabled:cursor-not-allowed focus:outline-none sm:text-sm"
                  >
                    {isLoading ? "Uploading..." : "Upload Post"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
