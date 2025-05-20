import { useUserViewModel } from "viewModels/useUserViewModel";

const UserListPage = () => {
  const { users, loading, error, handleSelectUser } = useUserViewModel();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="bg-slate-900 text-white h-screen">
      <section className="px-9 py-4 max-w-[1900px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl">Lista de Usuários</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => handleSelectUser(user.name)}
                className="p-4 border rounded-sm cursor-pointer hover:bg-gray-100 hover:text-black transition-all duration-150"
              >
                <h3 className="font-bold">{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserListPage;
