'use client';

import {ClientSideSuspense, RoomProvider} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {Editor} from "@/components/editor/Editor";
import ActiveCollaborators from "@/components/ActiveCollaborators";

function CollaborativeRoom({roomId, roomMetadata}) {
    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader/>}>
                <div className={'collaborative-room'}>
                    <Header className={''}>
                        <div className={'flex w-fit items-center justify-center gap-2'}>
                            <p className={'document-title'}>Share</p>
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
                    <Editor/>
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    );
}

export default CollaborativeRoom;
