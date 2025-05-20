import { useEffect, useState } from "react";

import { User } from "models/User";
import { UserService } from "services/UserService";

export function useUserViewModel() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userService = new UserService();

  useEffect(() => {
    userService
      .getUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function handleSelectUser(id: string) {
    alert(`Usuário selecionado: ${id}`);
  }

  return {
    users,
    loading,
    error,
    handleSelectUser,
  };
}
