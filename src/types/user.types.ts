export interface UserSummary {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  emailConfirmed: boolean;
  roles: string[];
}

export interface UpdateUserRequest {
  email: string;
  firstName: string;
  lastName: string;
}

export interface AssignRoleRequest {
  role: string;
}

export interface ResetUserPasswordRequest {
  newPassword: string;
}
