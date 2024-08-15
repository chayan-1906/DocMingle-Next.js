'use server';

import {nanoid} from "nanoid";
import {liveblocks} from "@/lib/liveblocks";
import {revalidatePath} from "next/cache";
import {homePath} from "@/globals/Routes";
import {parseStringify} from "@/lib/utils";

export const createDocument = async ({userId, email}) => {
    const roomId = nanoid();
    console.log(`room id is going to be created - ${roomId}`);

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
            defaultAccesses: ['room:write'],
        });

        if (!room || !room.id) {
            throw new Error("Room creation failed");
        }

        revalidatePath(homePath);

        return parseStringify(room);
    } catch (e) {
        console.log(`Error happened while creating a room: ${e}`);
    }
}

export const getDocument = async ({roomId, userId}) => {
    try {
        const room = await liveblocks.getRoom(roomId);

        const hasAccess = Object.keys(room.usersAccesses).includes(userId);

        if (!hasAccess) {
            throw new Error('You do not have access to this document');
        }

        return parseStringify(room);
    } catch (e) {
        console.log(`Error happened while getting a room: ${e}`);
    }
}
