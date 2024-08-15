'use client';

import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import {getClerkUsers} from "@/lib/actions/user.actions";

function Provider({children}) {
    return (
        <LiveblocksProvider authEndpoint={'/api/liveblocks-auth'} resolveUsers={async ({userIds}) => await getClerkUsers({userIds})}>
            <ClientSideSuspense fallback={<Loader/>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
}

export default Provider;
