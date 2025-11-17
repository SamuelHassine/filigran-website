import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ACCESS_STORAGE_KEY = "filigran-site-access";
const PASSWORD = "filigran-preview";

type PasswordGateProps = {
  children: ReactNode;
};

const getInitialAccessState = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(ACCESS_STORAGE_KEY) === "granted";
};

export const PasswordGate = ({ children }: PasswordGateProps) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(getInitialAccessState);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.classList.toggle("password-locked", !isUnlocked);

    return () => {
      document.body.classList.remove("password-locked");
    };
  }, [isUnlocked]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordValue.trim() === PASSWORD) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(ACCESS_STORAGE_KEY, "granted");
      }

      setIsUnlocked(true);
      setError(null);
      return;
    }

    setError("Incorrect password. Try again.");
    setPasswordValue("");
  };

  const handleReset = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(ACCESS_STORAGE_KEY);
    }

    setPasswordValue("");
    setError(null);
    setIsUnlocked(false);
  };

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden={!isUnlocked}
        className={cn(
          "min-h-screen transition duration-300",
          !isUnlocked && "pointer-events-none select-none blur-lg",
        )}
      >
        {children}
      </div>

      {!isUnlocked && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-background/90 px-6 backdrop-blur-xl">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/70 p-8 text-center shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan">
              Restricted
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-white">Protected Preview</h1>
            <p className="mt-2 text-sm text-white/70">
              Enter the password to unlock the site content.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <Input
                autoComplete="off"
                autoFocus
                className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/60"
                onChange={(event) => {
                  setPasswordValue(event.target.value);
                  setError(null);
                }}
                placeholder="Password"
                type="password"
                value={passwordValue}
              />

              {error && <p className="text-sm text-red-400">{error}</p>}

              <Button className="h-12 w-full rounded-2xl text-base" type="submit">
                Unlock site
              </Button>
            </form>

            <button
              className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white/70"
              onClick={handleReset}
              type="button"
            >
              Reset saved access
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

