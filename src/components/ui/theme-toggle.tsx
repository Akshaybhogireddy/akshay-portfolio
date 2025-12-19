import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Avoid hydration mismatch — render an invisible placeholder to keep layout
    return (
      <Button variant="ghost" size="icon" aria-hidden className="opacity-0 pointer-events-none">
        <Sun size={18} />
      </Button>
    );
  }

  const resolvedDark =
    theme === "dark" || (theme === "system" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggle = () => setTheme(resolvedDark ? "light" : "dark");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={`Toggle theme (current: ${theme ?? "system"})`}
      title={`Toggle theme (current: ${theme ?? "system"})`}
    >
      {/* show the action icon: sun when in dark to indicate switching to light, moon when in light */}
      {resolvedDark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
