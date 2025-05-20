import { User } from "models/User";

export class UserService {
  async getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Erro ao buscar usuários");
    return response.json();
  }
}
