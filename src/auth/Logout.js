import { useAuth0 } from "@auth0/auth0-react"

export const Logout = () => {

    const { logout } = useAuth0();

    return (
        <div className="d-flex justify-content-center">
            <button class="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</button>
        </div>
    );
};