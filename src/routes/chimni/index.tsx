import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chimni/")({
    component: ChimniPage,
});

function ChimniPage() {
    return (
        <>
            <h1 className="text-red-500">Appu</h1>
        </>
    );
}
