import { Loading } from "@/components/Loading";

export default function LogoPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading className="h-24 fill-[var(--foreground)]" />
    </div>
  );
}
