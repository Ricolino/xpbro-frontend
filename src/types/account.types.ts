export interface CurrentUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  emailConfirmed: boolean;
  roles: string[];
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
}
