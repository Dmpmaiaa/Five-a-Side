import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";

export default function Login(props) {
  return (
    <div className="bg-gradient-to-b from-[#211A1D] to-[#00000014] h-screen">
      <div className="text-contrastOffWhite text-center p-16">
        <h1 className="text-9xl font-bold italic">5</h1>
        <h2 className="text-4xl italic font-light">FIVE A SIDE</h2>
      </div>

      <section className="text-center mt-6">
        <div className="m-10">
          <LoginForm />
        </div>

        <div className="flex flex-col items-center gap-14">
          <Button text={"Log In"} border={true} />
          <Button text={"Sign Up"} color={"primaryBlue"} />
        </div>
      </section>
    </div>
  );
}
