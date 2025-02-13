/* eslint-disable filenames-simple/naming-convention */
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
    component: ProtectedLayout,
});

function ProtectedLayout() {
    return (
        <>
            <Outlet />
        </>
    );
}
