import { useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Gamepad2,
  Library,
  Link2,
  Loader2,
  RefreshCw,
} from "lucide-react";

export type BggConnectionResult = {
  success: boolean;
  userExists?: boolean;
  collectionAccessible?: boolean;
  apiReachable?: boolean;
  collectionCount?: number;
  importedGamesCount?: number;
};

type Props = {
  initialUsername?: string;
  initialConnected?: boolean;

  initialCollectionCount?: number;
  initialImportedGamesCount?: number;

  lastSyncAt?: string | null;

  onSave?: (username: string) => Promise<void>;

  onTestConnection?: (
    username: string
  ) => Promise<BggConnectionResult>;

  onSyncCollection?: () => Promise<void>;
};

export default function BggIntegrationCard({
  initialUsername = "",
  initialConnected = false,
  initialCollectionCount = 0,
  initialImportedGamesCount = 0,
  lastSyncAt = null,
  onSave,
  onTestConnection,
  onSyncCollection,
}: Props) {
  const [username, setUsername] = useState(initialUsername);

  const [savedUsername, setSavedUsername] =
    useState(initialUsername);

  const [isTesting, setIsTesting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const [error, setError] = useState("");

  const [lastSync, setLastSync] =
    useState(lastSyncAt);

  const [connection, setConnection] =
    useState<BggConnectionResult>({
      success: initialConnected,
      userExists: initialConnected,
      collectionAccessible: initialConnected,
      apiReachable: initialConnected,
      collectionCount:
        initialCollectionCount,
      importedGamesCount:
        initialImportedGamesCount,
    });

  const configured =
    savedUsername.trim().length > 0;

  const hasChanges =
    username.trim() !==
    savedUsername.trim();

  const status = useMemo(() => {
    if (connection.success) {
      return {
        label: "Connected",
        className:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      };
    }

    if (configured) {
      return {
        label: "Configured",
        className:
          "border-amber-500/20 bg-amber-500/10 text-amber-400",
      };
    }

    return {
      label: "Not Configured",
      className:
        "border-slate-700 bg-slate-800/80 text-slate-400",
      };
  }, [configured, connection.success]);

  const lastSyncLabel = useMemo(() => {
    if (!lastSync) {
      return "Never";
    }

    const date = new Date(lastSync);

    return date.toLocaleString();
  }, [lastSync]);

  const handleSave = async () => {
    const value = username.trim();

    if (!value) return;

    try {
      setError("");

      await onSave?.(value);

      setSavedUsername(value);

      setConnection({
        success: false,
        userExists: false,
        collectionAccessible: false,
        apiReachable: false,
        collectionCount: 0,
        importedGamesCount: 0,
      });
    } catch {
      setError(
        "Could not save your BoardGameGeek username."
      );
    }
  };

  const handleTest = async () => {
    if (!savedUsername) return;

    try {
      setError("");
      setIsTesting(true);

      const result =
        await onTestConnection?.(
          savedUsername
        );

      if (!result) {
        throw new Error();
      }

      setConnection(result);

      if (!result.success) {
        setError(
          "Connection verification failed."
        );
      }
    } catch {
      setError(
        "Unable to verify your account."
      );
    } finally {
      setIsTesting(false);
    }
  };

  const handleSync = async () => {
    try {
      setIsSyncing(true);

      await onSyncCollection?.();

      setLastSync(
        new Date().toISOString()
      );
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur">
      {/* HEADER */}

      <div className="border-b border-slate-800 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-500/20">
              <span className="font-bold text-white">
                BGG
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                BoardGameGeek
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Connect and sync your game
                collection.
              </p>

              {configured && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    @{savedUsername}
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-400">
                    <Clock3 size={12} />
                    Last sync: {lastSyncLabel}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            {status.label}
          </div>
        </div>
      </div>

      {/* STATS */}

      {connection.success && (
        <div className="grid gap-4 border-b border-slate-800 p-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Library size={16} />
              <span className="text-xs uppercase tracking-wider">
                BGG Collection
              </span>
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              {connection.collectionCount ??
                0}
            </div>

            <div className="text-sm text-slate-500">
              Games Found
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Gamepad2 size={16} />
              <span className="text-xs uppercase tracking-wider">
                XPBRO Library
              </span>
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              {connection.importedGamesCount ??
                0}
            </div>

            <div className="text-sm text-slate-500">
              Imported Games
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <RefreshCw size={16} />
              <span className="text-xs uppercase tracking-wider">
                Sync Status
              </span>
            </div>

            <div className="mt-2 text-lg font-semibold text-emerald-400">
              Up To Date
            </div>

            <div className="text-sm text-slate-500">
              Last sync successful
            </div>
          </div>
        </div>
      )}

      {/* FORM */}

      <div className="p-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          BGG Username
        </label>

        <input
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          placeholder="Enter your BoardGameGeek username"
          className="
            w-full rounded-xl
            border border-slate-700
            bg-slate-950/50
            px-4 py-3
            text-white
            placeholder:text-slate-500
            outline-none
            transition
            focus:border-violet-500
            focus:ring-2
            focus:ring-violet-500/20
          "
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={handleSave}
            disabled={
              !username.trim() ||
              !hasChanges
            }
            className="
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              px-5 py-2.5
              text-sm font-medium text-white
              shadow-lg shadow-violet-500/20
              transition
              hover:brightness-110
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            {configured
              ? "Change Username"
              : "Set Username"}
          </button>

          <button
            onClick={handleTest}
            disabled={
              !configured ||
              hasChanges ||
              isTesting
            }
            className="
              flex items-center gap-2
              rounded-xl
              border border-slate-700
              bg-slate-800/50
              px-5 py-2.5
              text-sm font-medium
              text-slate-200
              transition
              hover:bg-slate-800
              disabled:opacity-40
            "
          >
            {isTesting ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Testing...
              </>
            ) : (
              <>
                <Link2 size={16} />
                Test Connection
              </>
            )}
          </button>

          <button
            onClick={handleSync}
            disabled={
              !connection.success ||
              isSyncing
            }
            className="
              flex items-center gap-2
              rounded-xl
              border border-violet-500/20
              bg-violet-500/10
              px-5 py-2.5
              text-sm font-medium
              text-violet-300
              transition
              hover:bg-violet-500/20
              disabled:opacity-40
            "
          >
            {isSyncing ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw size={16} />
                Sync Collection
              </>
            )}
          </button>
        </div>

        {(configured ||
          connection.success) && (
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Verification
            </div>

            <div className="space-y-3">
              <VerificationItem
                label="User Exists"
                success={
                  connection.userExists
                }
              />

              <VerificationItem
                label="Collection Accessible"
                success={
                  connection.collectionAccessible
                }
              />

              <VerificationItem
                label="API Reachable"
                success={
                  connection.apiReachable
                }
              />
            </div>
          </div>
        )}

        {connection.success && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-400">
            <CheckCircle2 size={18} />
            BoardGameGeek verified and
            ready for sync.
          </div>
        )}

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle size={18} />
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function VerificationItem({
  label,
  success,
}: {
  label: string;
  success?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-300">
        {label}
      </span>

      {success ? (
        <CheckCircle2
          size={18}
          className="text-emerald-400"
        />
      ) : (
        <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
      )}
    </div>
  );
}
