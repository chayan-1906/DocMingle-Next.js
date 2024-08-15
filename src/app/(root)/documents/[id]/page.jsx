import CollaborativeRoom from "@/components/CollaborativeRoom";
import {getDocument} from "@/lib/actions/room.actions";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {homePath, signInPath} from "@/globals/Routes";

async function DocumentPage({params}) {
    const clerkUser = await currentUser();
    if (!clerkUser) redirect(signInPath);

    const roomId = params.id;
    const userId = clerkUser.emailAddresses[0].emailAddress;
    const room = await getDocument({roomId, userId});

    if (!room) redirect(homePath);

    return (
        <main className={'flex flex-col w-full items-center'}>
            <CollaborativeRoom roomId={roomId} roomMetadata={room.metadata}/>
        </main>
    );
}

export default DocumentPage;
