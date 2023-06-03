export default function LoginForm(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        className="bg-transparent placeholder-contrastOffWhite w-64 border-b p-3 border-contrastOffWhite"
      ></input>
      <input
        type="password"
        placeholder="Senha"
        className="bg-transparent placeholder-contrastOffWhite w-64 border-b border-contrastOffWhite p-3"
      ></input>
    </form>
  );
}
