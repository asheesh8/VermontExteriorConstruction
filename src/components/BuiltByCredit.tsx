"use client";

import { useRouter } from "next/navigation";

/**
 * "Built by ArkiTech-Sol" credit in the very bottom of the footer.
 * Triple-clicking it opens the hidden admin panel (e.detail === 3 fires
 * only on a genuine triple-click; single/double clicks do nothing).
 */
export default function BuiltByCredit() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={(e) => {
        if (e.detail === 3) router.push("/admin");
      }}
      title="Built by ArkiTech-Sol"
      className="cursor-default select-none text-[11px] font-medium tracking-wide text-cream/30 transition-colors hover:text-cream/55"
    >
      Built by <span className="font-semibold">ArkiTech-Sol</span>
    </button>
  );
}
