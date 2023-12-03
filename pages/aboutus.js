import Link from "next/link";
import Header from "./components/header";

export default function AboutUs()
{
    return(
        <>
        
        <Header title="About"/>

        <h1>About Us</h1>

        <h3>2nd Page</h3>

        <Link href="/" >Home</Link>
        </>
    )
}