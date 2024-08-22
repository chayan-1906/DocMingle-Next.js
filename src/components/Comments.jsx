import {useThreads} from "@liveblocks/react";
import {Composer, Thread} from "@liveblocks/react-ui";
import {useIsThreadActive} from "@liveblocks/react-lexical";
import {cn} from "@/lib/utils";

const ThreadWrapper = ({thread}) => {
    const isActive = useIsThreadActive(thread.id);

    return (
        <Thread thread={thread} data-state={isActive ? 'active' : null} className={cn('comment-thread-border', isActive && '!border-blue-500 shadow-md', thread.resolved && 'opacity-40')}/>
    );
}

function Comments() {
    const {threads} = useThreads();

    return (
        <div className={'comments-container'}>
            <Composer className={'comment-composer'}/>
            {threads.map((thread) => {
                return (
                    <ThreadWrapper key={thread.id} thread={thread}/>
                );
            })}
        </div>
    );
}

export default Comments;
