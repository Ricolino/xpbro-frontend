import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authApi } from "@/api/auth.api";
import { ErrorMessage } from "@/components/common/ErrorMessage";

interface RegisterFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialForm: RegisterFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] =
    useState<RegisterFormState>(initialForm);

  const [error, setError] =
    useState<string>("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      name,
      value,
    } = event.target as HTMLInputElement & {
      name: keyof RegisterFormState;
    };

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);

      await authApi.register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });

      navigate("/login");
    } catch {
      setError(
        "Unable to create account."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-md px-4">
      <h1 className="mb-6 text-3xl font-bold">
        Register
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block"
          >
            First Name
          </label>

          <input
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block"
          >
            Last Name
          </label>

          <input
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1 block"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <ErrorMessage message={error}/>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isSubmitting
            ? "Creating account..."
            : "Register"}
        </button>      </form>

      <div className="mt-6 text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
