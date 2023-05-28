import { Container, NavLink } from "react-bootstrap";
import { Link, Outlet, useRouteLoaderData } from "react-router-dom";

export default function AdminPrivateRoute() {
    const user = useRouteLoaderData("root");

    if (user.is_admin) {
        return <Outlet />;
    }

    return (
        <Container className="">
            <div className="col-6 p-4 mt-4 mx-auto bg-light">
                <p>You're not authorized to be here!</p>
                <p>Navigate back <Link as={NavLink} to={"/"} replace={true}>home</Link></p>
            </div>
        </Container>
    )
}
