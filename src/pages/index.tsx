import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
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
            </ul>
        </div>
    );
};

export default Home;
