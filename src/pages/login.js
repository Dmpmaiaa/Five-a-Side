import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login(props) {
    return (
        <div className="bg-login-bg bg-auto bg-no-repeat bg-left h-screen grayscale-75 -z-20">
            <div className="h-screen w-full bg-gradient-to-b from-[#211a1db7] to-[#00000014] -z-10">
                <div className="text-contrastOffWhite text-center p-16">
                    <h1 className="text-9xl font-bold italic">5</h1>
                    <h2 className="text-4xl italic font-light">FIVE A SIDE</h2>
                </div>
                <section className="text-center mt-6">
                    <div className="m-10">
                        <LoginForm />
                    </div>

                    <div className="flex flex-col items-center gap-14">
                        <Link href="/cards">
                            <Button text={"Log In"} border={true} path={"/cards"} />
                        </Link>
                        <Link href="/">
                            <Button text={"Sign Up"} color={"primaryBlue"} path={"/"} />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
