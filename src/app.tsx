import "@fontsource/bai-jamjuree/200.css";
import "@fontsource/bai-jamjuree/300.css";
import "@fontsource/bai-jamjuree/400.css";
import "@fontsource/bai-jamjuree/500.css";
import "@fontsource/bai-jamjuree/600.css";
import "@fontsource/bai-jamjuree/700.css";
import "./global.css";

import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { HeroUIProvider } from "@heroui/react";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <>
            <HeroUIProvider>
                <RouterProvider router={router} />
            </HeroUIProvider>
        </>
    );
}

export default App;
