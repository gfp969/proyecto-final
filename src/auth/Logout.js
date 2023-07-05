import { useAuth0 } from "@auth0/auth0-react"

export const Logout = () => {

    const { Logout } = useAuth0();

    return (
        <button onClick={() => Logout({ returnTo: window.location.origin })}>
            Cerrar sesión
        </button>
    )
};