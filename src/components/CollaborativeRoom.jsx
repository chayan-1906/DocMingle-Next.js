'use client';

import {ClientSideSuspense, RoomProvider} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {Editor} from "@/components/editor/Editor";
import ActiveCollaborators from "@/components/ActiveCollaborators";
import {useCallback, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {updateDocument} from "@/lib/actions/room.actions";

function CollaborativeRoom({roomId, roomMetadata, users, currentUserType}) {
    const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const containerRef = useRef();
    const inputRef = useRef();

    const updateTitleHandler = useCallback(async (e) => {
        if (e.key === 'Enter') {
            setLoading(true);
        }

        try {
            if (documentTitle !== roomMetadata.title) {
                // const updatedDocument = await updateDocument(roomId, documentTitle);

                // if (updatedDocument) setEditing(false);
            }
        } catch (e) {
            console.error(e);
        }

        setLoading(false);
    }, [documentTitle, roomMetadata.title]);

    useEffect(() => {
        const handleClickOutside = async (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setEditing(true);
                await updateDocument(roomId, documentTitle);
                setEditing(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [documentTitle, roomId]);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]);

    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader/>}>
                <div className={'collaborative-room'}>
                    <Header className={''}>
                        <div ref={containerRef} className={'flex w-fit items-center justify-center gap-2'}>
                            {editing && !loading ? (
                                <Input
                                    type={'text'}
                                    value={documentTitle}
                                    ref={inputRef}
                                    placeholder={'Enter title...'}
                                    onChange={(e) => setDocumentTitle(e.target.value)}
                                    // onKeyDown={updateTitleHandler}
                                    disabled={!editing}
                                    className={'document-title-input'}
                                />
                            ) : (
                                <div>
                                    <p className={'document-title'}>{documentTitle}</p>
                                </div>
                            )}

                            {currentUserType === 'editor' && !editing && (
                                <Image src={'../assets/icons/edit.svg'} alt={'edit'} width={24} height={24} onClick={() => setEditing(true)} className={'cursor-pointer'}/>
                            )}

                            {currentUserType !== 'editor' && !editing && (
                                <p className={'view-only-tag'}>View Only</p>
                            )}

                            {loading && (
                                <p className={'text-sm text-gray-400'}>saving...</p>
                            )}
                        </div>
                        <div className={'flex w-full flex-1 justify-end gap-2 sm:gap-3'}>
                            <ActiveCollaborators/>
                        </div>
                        <SignedOut>
                            <SignInButton/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>
                    </Header>
                    <Editor roomId={roomId} currentUserType={currentUserType}/>
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    );
}

export default CollaborativeRoom;
