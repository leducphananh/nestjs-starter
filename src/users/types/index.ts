import { Exclude } from 'class-transformer';

export class SerializedUser {
  id: number;
  username: string;
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
