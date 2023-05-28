import { Link, useNavigate, useRevalidator, useRouteLoaderData } from "react-router-dom";
import { logout } from "../utils";
import { Button, Dropdown } from "react-bootstrap";

export default function UserDropDown() {
    const navigate = useNavigate();
    const revalidator = useRevalidator();
    const user = useRouteLoaderData("root");

    function logoutAction() {
        logout();

        revalidator.revalidate();
        navigate("/", {replace: true});
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="user-profile-dropdown">
                {user?.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item disabled as="div" className="mb-0 text-muted fs-6">
                    <span className="m-0">{user?.name} <br/> {user?.email}</span>
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={Link} to={"/profile"}>
                    Profile
                </Dropdown.Item>
                <Dropdown.Item as={Button} onClick={logoutAction}>
                    Logout
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
