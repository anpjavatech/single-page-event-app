import MainNavigation from "../components/MainNavigation";

export default function ErrorPage(){
    return <>
        <MainNavigation />
        <main>
            <h1>Error Occurred.</h1>
            <p>Page Not found.</p>
        </main>
    </>;
}