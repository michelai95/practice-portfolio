import Head from 'next/head'
import Link from 'next/link'

export default function Navbar() {

    useEffect(() => {
        document.getElementById('home').style.color = 'hotpink';
    }, [])
    return (
        <div>
            <Head>
                <title>Michela's Portfolio</title>
            </Head>
            <navbar>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>
                        <Link href="">
                            <a>Projects</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}