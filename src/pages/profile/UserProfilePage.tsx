import {
  BadgeCheck,
  Mail,
  Shield,
  User,
} from "lucide-react";

import { useAuth } from "@/auth/AuthContext";

export const UserProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const initials = (
    user.firstName?.[0] ??
    user.email?.[0] ??
    "U"
  ).toUpperCase();

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800/80
          bg-gradient-to-br
          from-slate-900/90
          to-slate-950/80
          p-5
          shadow-2xl
          sm:p-6
          lg:p-8
        "
      >
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-tr
              from-indigo-600
              to-purple-500
              text-3xl
              font-bold
              text-white
              shadow-lg
              shadow-indigo-500/20
            "
          >
            {initials}
          </div>

          <div>
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-500/20
                bg-indigo-500/10
                px-3
                py-1.5
                text-xs
                font-medium
                text-indigo-400
              "
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              XPBRO Member
            </div>

            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {user.firstName} {user.lastName}
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your account and connected
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Info */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Picture */}
        <div
          className="
            rounded-2xl
            border
            border-slate-800/80
            bg-slate-900/60
            p-5
            backdrop-blur-sm
          "
        >
          <h2 className="mb-6 text-lg font-semibold text-white">
            Profile Picture
          </h2>

          <div className="flex flex-col items-center gap-5">
            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-gradient-to-tr
                from-indigo-600
                to-purple-500
                text-4xl
                font-bold
                text-white
              "
            >
              {initials}
            </div>

            <button
              type="button"
              disabled
              className="
                rounded-xl
                border
                border-slate-700
                bg-slate-950/50
                px-4
                py-2
                text-sm
                text-slate-500
              "
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Account Information */}
        <div
          className="
            lg:col-span-2
            rounded-2xl
            border
            border-slate-800/80
            bg-slate-900/60
            p-5
            backdrop-blur-sm
            sm:p-6
          "
        >
          <h2 className="mb-6 text-lg font-semibold text-white">
            Account Information
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard
              label="First Name"
              value={user.firstName}
            />

            <InfoCard
              label="Last Name"
              value={user.lastName}
            />

            <InfoCard
              label="Email"
              value={user.email}
            />

            <InfoCard
              label="Email Confirmed"
              value={
                user.emailConfirmed
                  ? "Yes"
                  : "No"
              }
            />

            <InfoCard
              label="Account Type"
              value="Standard"
            />

            <InfoCard
              label="Login Method"
              value="Username / Password"
            />

            <InfoCard
              label="Roles"
              value={user.roles.join(", ")}
            />

            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/50
                p-4
              "
            >
              <div className="mb-1 text-sm text-slate-500">
                User ID
              </div>

              <div className="break-all font-medium text-white">
                {user.id}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section
        className="
          rounded-2xl
          border
          border-slate-800/80
          bg-slate-900/60
          p-5
          backdrop-blur-sm
          sm:p-6
        "
      >
        <div className="mb-6 flex items-center gap-3">
          <Shield className="h-5 w-5 text-indigo-400" />

          <h2 className="text-lg font-semibold text-white">
            Security
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FeatureCard
            title="Change Password"
            description="Manage your account password."
          />

          <FeatureCard
            title="Active Sessions"
            description="View and manage connected devices."
          />
        </div>
      </section>

      {/* Connected Services */}
      <section
        className="
          rounded-2xl
          border
          border-slate-800/80
          bg-slate-900/60
          p-5
          backdrop-blur-sm
          sm:p-6
        "
      >
        <div className="mb-6 flex items-center gap-3">
          <Mail className="h-5 w-5 text-purple-400" />

          <h2 className="text-lg font-semibold text-white">
            Connected Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ServiceCard
            title="Steam"
            description="Connect your Steam account."
          />

          <ServiceCard
            title="BoardGameGeek"
            description="Connect your BGG account."
          />

          <ServiceCard
            title="Board Game Arena"
            description="Connect your BGA account."
          />
        </div>
      </section>

      {/* Future Features */}
      <section
        className="
          rounded-2xl
          border
          border-slate-800/80
          bg-slate-900/60
          p-5
          backdrop-blur-sm
          sm:p-6
        "
      >
        <h2 className="mb-6 text-lg font-semibold text-white">
          Future Features
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Achievements",
            "Activity History",
            "Last Seen",
            "Premium Membership",
            "Collection Statistics",
            "User Badges",
          ].map((feature) => (
            <div
              key={feature}
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/50
                p-4
                text-slate-300
              "
            >
              {feature}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

type InfoCardProps = {
  label: string;
  value: string;
};

const InfoCard = ({
  label,
  value,
}: InfoCardProps) => (
  <div
    className="
      rounded-xl
      border
      border-slate-800
      bg-slate-950/50
      p-4
    "
  >
    <div className="mb-1 text-sm text-slate-500">
      {label}
    </div>

    <div className="font-medium text-white">
      {value}
    </div>
  </div>
);

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({
  title,
  description,
}: FeatureCardProps) => (
  <div
    className="
      rounded-xl
      border
      border-slate-800
      bg-slate-950/50
      p-5
    "
  >
    <h3 className="font-medium text-white">
      {title}
    </h3>

    <p className="mt-2 text-sm text-slate-400">
      {description}
    </p>

    <button
      type="button"
      disabled
      className="
        mt-4
        rounded-xl
        border
        border-slate-700
        px-4
        py-2
        text-sm
        text-slate-500
      "
    >
      Coming Soon
    </button>
  </div>
);

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard = ({
  title,
  description,
}: ServiceCardProps) => (
  <div
    className="
      rounded-xl
      border
      border-slate-800
      bg-slate-950/50
      p-5
    "
  >
    <h3 className="font-medium text-white">
      {title}
    </h3>

    <p className="mt-2 text-sm text-slate-400">
      {description}
    </p>
  </div>
);
