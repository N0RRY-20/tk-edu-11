"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background text-foreground animate__animated animate__fadeIn">
      {/* Kode / Text 404 */}
      <h1 className="text-[6rem] font-bold text-foreground mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Halaman yang kamu cari tidak ditemukan.
      </p>

      {/* Tombol kembali */}
      <Button
        variant="outline"
        onClick={() => router.push("/")}
        className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
      >
        Kembali ke Beranda
      </Button>
    </div>
  );
}
