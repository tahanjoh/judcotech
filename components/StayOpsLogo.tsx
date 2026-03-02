import Link from "next/link";
import Image from "next/image";

export default function StayOpsLogo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image
        src="/logo/stayops-icon.png"
        alt="StayOps"
        width={36}
        height={36}
        priority
      />
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-tight text-zinc-950">
          Stay<span className="text-blue-700">Ops</span>
        </span>
        <span className="text-[10px] text-zinc-500">A JudcoTech Platform</span>
      </div>
    </Link>
  );
}