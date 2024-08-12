'use client';

import {Button} from "@/components/ui/button";
import {useCallback} from "react";
import Image from "next/image";
import {createDocument} from "@/lib/actions/room.actions";
import {useRouter} from "next/navigation";
import {documentPath} from "@/globals/Routes";

function AddDocumentBtn({userId, email}) {
    let router = useRouter();

    const addDocumentHandler = useCallback(async () => {
        try {
            const room = await createDocument({userId, email});
            if (room) {
                router.push(documentPath(room.id));
            }
        } catch (e) {
            console.log(e);
        }
    }, [email, router, userId]);

    return (
        <Button type={'submit'} onClick={addDocumentHandler} className={'flex gradient-blue gap-1 shadow-md'}>
            <Image src={'../assets/icons/add.svg'} alt={'add'} width={24} height={24}/>
            <p className={'hidden sm:flex'}>Start a blank document</p>
        </Button>
    );
}

export default AddDocumentBtn;
