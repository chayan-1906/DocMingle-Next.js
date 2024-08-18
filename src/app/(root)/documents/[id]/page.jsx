import CollaborativeRoom from "@/components/CollaborativeRoom";
import {getDocument} from "@/lib/actions/room.actions";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {homePath, signInPath} from "@/globals/Routes";
import {getClerkUsers} from "@/lib/actions/user.actions";

async function DocumentPage({params}) {
    const clerkUser = await currentUser();
    if (!clerkUser) redirect(signInPath);

    const roomId = params.id;
    const userId = clerkUser.emailAddresses[0].emailAddress;
    const room = await getDocument({roomId, userId});

    if (!room) redirect(homePath);

    const userIds = Object.keys(room.usersAccesses);
    const users = await getClerkUsers({userIds});

    const usersData = users.map((user) => ({
        ...user,
        userType: room.usersAccesses[user.email]?.includes('room:write') ? 'editor' : 'viewer',
    }));

    const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write') ? 'editor' : 'viewer';

    return (
        <main className={'flex flex-col w-full items-center'}>
            <CollaborativeRoom roomId={roomId} roomMetadata={room.metadata} users={usersData} currentUserType={currentUserType}/>
        </main>
    );
}

export default DocumentPage;
