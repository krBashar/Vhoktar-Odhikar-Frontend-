import Head from "next/head";
import Link from "next/link";
import Header from "./components/header";


export default function Home() {
  return (
    <>
    
    <Header title="Home"/>

      <h1>Hello World</h1>
      <br/>
      <h1>Holaa</h1>
      <br/>

      <Link href="aboutus" >About Us</Link>
    </>
  )
}
