import { UserDto } from "./user";


export interface LoginRequest{
  username: string,
  password: string
}

export interface LoginResponse{
  user: UserDto,
  token: string
}