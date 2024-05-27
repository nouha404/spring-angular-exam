export interface AuthenticationRequest {
  username:string,
  password:string
}

export interface TokenResponse {
  username:string,
  roles:string[],
  token:string
}
