import Head from "next/head";


export default function Header(props)
{
    return(
        <>
        <Head>
      <link rel="icon" type="image/x-icon" href="detectiveL.jpg"/>
      <title>{props.title}</title>
      </Head>
        </>
    )
}