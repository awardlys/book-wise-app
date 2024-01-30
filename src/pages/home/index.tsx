export function Home() {
  return (
    <div className="h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 w-[232px] rounded-md h-full flex flex-col justify-between items-center p-4">
        <span className="font-bold text-lg text-purple-300">BookWise</span>
        <ul className="list-none text-slate-400">
          <li>Início</li>
          <li>Explorar</li>
          <li>Perfil</li>
        </ul>
        <div className="text-slate-400">Usuário</div>
      </div>
    </div>
  );
}
