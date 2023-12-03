import { useRouter } from "next/router";


export default function Users()
{
    const router = useRouter();
    const {id, name, count} = router.query;


    return (
        <>
        <h1>User</h1>
        <p>Email: {id}</p>
        <p>Name: {name}</p>
        <p>Count: {count}</p>
        </>
    )

}