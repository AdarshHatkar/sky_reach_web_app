/* eslint-disable filenames-simple/naming-convention */
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: PublicLayout
});



function PublicLayout() {
  return <>
    {/* <p>PublicLayout</p> */}
    <Outlet />
  </>;
}