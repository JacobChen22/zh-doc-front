import {Dialog, Transition} from '@headlessui/react'
import {ChangeEvent, Fragment, useState} from 'react'
import {clsx} from "clsx";

export default function CreateDocModal({open, success, cancel}: {
    open: boolean,
    success: (args: string) => void,
    cancel: () => void
}) {
    const [docTitle, setDocTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function closeModal() {
        cancel();
    }

    function handleOK() {
        setIsLoading(true);
        success(docTitle);
    }

    function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setDocTitle(event.target.value);
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Create New Document
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <label className="text-gray-600 mr-2">
                                            Document Title:
                                        </label>
                                        <input type="text" value={docTitle} onChange={handleTitleChange}
                                               className="block w-full rounded-md border-0 py-1.5 px-1 ring-1 ring-inset ring-gray-300 focus:outline-none"/>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            disabled={isLoading}
                                            type="button"
                                            className="inline-flex mr-1 disabled:opacity-75 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={handleOK}
                                        >
                                            <i className={clsx("ri-restart-line animate-spin mr-1", !isLoading && "hidden")}></i>
                                            Create
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
