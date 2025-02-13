import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/feedback/")({
    component: FeedbackPage
});

function FeedbackPage() {
    return <>
        <div className="text-white bg-[#091B33] min-h-screen">

            <div className="flex justify-center w-full pt-20">
                <h1 className="text-[25px]">Feedback</h1>
            </div>
            <div className="w-full p-5">

                <form>
                    <div className="relative mb-10">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder='Name'
                            className="w-full py-1 transition-colors border-b border-gray-300 focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"

                        />

                    </div>

                    <div className="relative mb-10">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='Email'
                            className="w-full py-1 transition-colors border-b border-gray-300 focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        />

                    </div>

                    <div className="relative mb-10">
                        <input
                            id="rating"
                            name="rating"
                            placeholder='Rating (1-5)'
                            type="rating"
                            className="w-full py-1 transition-colors border-b border-gray-300 focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        />
                    </div>

                    <div className="relative mb-10">
                        <input
                            id="subject"
                            name="subject"
                            placeholder='Subject'
                            type="subject"
                            className="w-full py-1 transition-colors border-b border-gray-300 focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        />
                    </div>
                    <div className="mb-5">
                        <textarea placeholder="Message" className="bg-[#091B33] border-[1px] border-gray-400 w-full h-60 px-2"></textarea>
                    </div>

                    <div>
                        <button
                            className="w-full h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </>;
}