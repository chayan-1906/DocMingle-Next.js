import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

function Header({className, children}) {
    return (
        <div className={cn('header', className)}>
            <Link href={'/'} className={'md:flex-1'}>
                <Image src={'../assets/icons/logo.svg'} alt={'logo-with-name'} width={120} height={32} className={'hidden md:flex'}/>
                <Image src={'../assets/icons/logo-icon.svg'} alt={'logo-without-name'} width={32} height={32} className={'mr-2 hidden'}/>
            </Link>
            {children}
        </div>
    );
}

export default Header;
