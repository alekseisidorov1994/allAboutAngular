export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;

}
export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
export interface Post {
  id?: string
  date?: Date;
  title: string;
  author: string;
  content?: any;
  text?: any;
}
export interface FbCreateResponse {
  name: string
}
