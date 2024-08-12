'use client';

import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";

function Provider({children}) {
    return (
        <LiveblocksProvider authEndpoint={'/api/liveblocks-auth'}>
            <ClientSideSuspense fallback={<Loader/>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
}

export default Provider;
