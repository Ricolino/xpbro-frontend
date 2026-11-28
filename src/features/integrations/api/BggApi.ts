import api from "@/api/axios";

export type BggProfileResponse = {
  username: string;
  configured: boolean;
};

export type TestBggConnectionResponse = {
  success: boolean;
  userExists: boolean;
  collectionAccessible: boolean;
  apiReachable: boolean;
  collectionCount: number;
  importedGamesCount: number;
};

export const bggApi = {
  async getProfile(): Promise<BggProfileResponse> {
    const response =
      await api.get<BggProfileResponse>(
        "/bgg/profile"
      );

    return response.data;
  },

  async saveUsername(
    username: string
  ): Promise<void> {
    await api.put("/bgg/username", {
      username,
    });
  },

  async testConnection(): Promise<TestBggConnectionResponse> {
    const response =
      await api.get<TestBggConnectionResponse>(
        "/bgg/connection-test"
      );

    return response.data;
  },
};
