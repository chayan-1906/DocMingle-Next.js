'use server';

import {nanoid} from "nanoid";
import {liveblocks} from "@/lib/liveblocks";
import {revalidatePath} from "next/cache";
import {homePath} from "@/globals/Routes";
import {parseStringify} from "@/lib/utils";

export const createDocument = async ({userId, email}) => {
    const roomId = nanoid();

    try {
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled',
        }

        const usersAccesses = {
            [email]: ['room:write'],
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: [],
        });

        revalidatePath(homePath);

        return parseStringify(room);
    } catch (e) {
        console.log(`Error happened while creating a room: ${e}`);
    }
}
