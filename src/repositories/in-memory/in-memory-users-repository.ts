import { User } from "generated/prisma/client";
import { UserCreateInput } from "generated/prisma/models";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];
  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
  async create(data: UserCreateInput): Promise<User> {
    const user = {
      id: "user-1",
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
    };

    this.items.push(user);

    return user;
  }
}
