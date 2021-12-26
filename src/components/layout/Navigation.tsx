import Link from 'next/link';

export const Navigation=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link href={"./info"}>
                        <a>info</a>
                    </Link>
                </li>
                <li>
                    <Link href={"./characters"}>
                        <a>characters</a>
                    </Link>
                </li>
                <li>
                    <Link href={"./cast"}>
                        <a>cast</a>
                    </Link>
                </li>
                <li>
                    <Link href={"./episodes"}>
                        <a>episodes</a>
                    </Link>
                </li>
                <li>
                    <Link href={"./questions"}>
                        <a>questions</a>
                    </Link>
                </li>
                <li>
                    <Link href={"./inventory"}>
                        <a>inventory</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}