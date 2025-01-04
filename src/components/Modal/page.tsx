import { CircleHelp } from "lucide-react"
import { AnimatedTooltip } from "../ui/animated-tooltip"
import { FormEvent } from "react";
import axios from "axios";


const Modal = ({ toggleModal,setError }:{toggleModal:()=>void,setError:(m:string)=>void}) => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log("Form Data:", data);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}username`,data).then((response) => {
            console.log(response);
            toggleModal();
        }).catch((err) => {
            console.log(err);
            setError(err.response?.data?.message);
            toggleModal();
        })
      };
    return (<> {
        <div
            id="authentication-modal"
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
            onClick={toggleModal}
        >
            <div
                className="relative p-4 w-full max-w-md bg-black/60 text-white rounded-lg shadow dark:bg-gray-700"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal content */}
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl  text-gray-200 dark:text-white">
                        Add a New Profile
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={toggleModal}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <div className="p-4 md:p-5">
                    <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                        <div>
                            <div className="flex justify-between items-center">
                                <label
                                    htmlFor="profileURN"
                                    className="block mb-2 text-sm font-semibold text-gray-200 dark:text-white"
                                >
                                    Linkedin Porfile URN
                                </label>
                            </div>
                            <input
                                type="text"
                                name="profileURN"
                                id="profileURN"
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="https://www.linkedin.com/in/xyz-dd"
                                required
                            />
                        </div>
                        <div>
                            <div  className="flex justify-between items-center relative">
                            <label
                                htmlFor="sessionCookie"
                                className="block mb-2 text-sm font-semibold text-gray-200 dark:text-white"
                            >
                                Linkedin Session Cookie
                            </label>
                            <AnimatedTooltip icon={<CircleHelp/>} tooltip={`Go to your linkedin <b>Open Developers Tool</b> >> <b> Click on Application </b> >> <b> Click on Cookies </b> >> Copy the value of <code>li_at</code>`}/>
                            </div>
                            <input
                                type="password"
                                name="sessionCookie"
                                id="sessionCookie"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Click to Add
                        </button>
                    </form>
                </div>
            </div>
        </div>}</>)
}


export default Modal