import {
  Activity,
  Award,
  Dice5,
  Gamepad2,
  Sparkles,
  Users2,
} from "lucide-react";

import { useAuth } from "@/auth/AuthContext";

export const DashboardPage = () => {
  const { user } = useAuth();

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

        <div className="relative z-10">
          <div
            className="
              mb-4
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
            <Sparkles className="h-3.5 w-3.5" />
            <span>Welcome Back</span>
          </div>

          <h1
            className="
              mb-3
              text-2xl
              font-bold
              text-white
              sm:text-3xl
              lg:text-4xl
            "
          >
            Hello, {user?.firstName}.
          </h1>

          <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
            Your gaming hub is ready. Keep track of your
            collections, sessions, achievements, friends
            and future integrations from a single place.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
          <div className="mb-4 flex items-center justify-between">
            <Gamepad2 className="h-6 w-6 text-indigo-400" />

            <span className="text-xs text-slate-500">
              COLLECTION
            </span>
          </div>

          <div className="text-2xl font-bold text-white sm:text-3xl">
            0
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Games Owned
          </p>
        </div>

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
          <div className="mb-4 flex items-center justify-between">
            <Dice5 className="h-6 w-6 text-purple-400" />

            <span className="text-xs text-slate-500">
              ACTIVITY
            </span>
          </div>

          <div className="text-2xl font-bold text-white sm:text-3xl">
            0
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Games Played
          </p>
        </div>

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
          <div className="mb-4 flex items-center justify-between">
            <Users2 className="h-6 w-6 text-blue-400" />

            <span className="text-xs text-slate-500">
              SOCIAL
            </span>
          </div>

          <div className="text-2xl font-bold text-white sm:text-3xl">
            0
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Friends
          </p>
        </div>

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
          <div className="mb-4 flex items-center justify-between">
            <Award className="h-6 w-6 text-amber-400" />

            <span className="text-xs text-slate-500">
              XP
            </span>
          </div>

          <div className="text-2xl font-bold text-white sm:text-3xl">
            0
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Achievements
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div
          className="
            rounded-2xl
            border
            border-slate-800/80
            bg-slate-900/60
            p-4
            backdrop-blur-sm
            sm:p-6
          "
        >
          <div className="mb-6 flex items-center gap-3">
            <Activity className="h-5 w-5 text-indigo-400" />

            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Recent Activity
            </h2>
          </div>

          <div className="space-y-3">
            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/50
                p-4
                text-slate-400
              "
            >
              Your activity feed will appear here.
            </div>

            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/50
                p-4
                text-slate-400
              "
            >
              Collection updates will appear here.
            </div>

            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/50
                p-4
                text-slate-400
              "
            >
              Friends activity will appear here.
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-slate-800/80
            bg-slate-900/60
            p-4
            backdrop-blur-sm
            sm:p-6
          "
        >
          <h2 className="mb-6 text-lg font-semibold text-white sm:text-xl">
            Upcoming Features
          </h2>

          <div className="space-y-3">
            {[
              "Game Collection",
              "Wishlist",
              "Session Tracking",
              "BoardGameGeek Integration",
              "Board Game Arena Integration",
              "Achievement System",
            ].map((feature) => (
              <div
                key={feature}
                className="
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-950/50
                  p-3
                  text-sm
                  text-slate-300
                  sm:text-base
                "
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section
        className="
          rounded-2xl
          border
          border-slate-800/80
          bg-slate-900/60
          p-4
          backdrop-blur-sm
          sm:p-6
        "
      >
        <h2 className="mb-6 text-lg font-semibold text-white sm:text-xl">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Collection",
            "Sessions",
            "Friends",
            "Events",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/50
                p-4
                transition-all
                duration-200
                hover:border-indigo-500/40
                sm:p-5
              "
            >
              <div className="font-medium text-white">
                {item}
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
