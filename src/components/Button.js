import { Router, useRouter } from "next/router";

export default function Button({ text, border, color, path }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(path);
    };

    return (
        <button
            onClick={handleClick}
            className={`rounded-full w-64 h-9 text-base text-contrastOffWhite bg-${
                color ? color : "transparent"
            } ${border && "border border-contrastOffWhite border-opacity-60"}`}
        >
            {text}
        </button>
    );
}