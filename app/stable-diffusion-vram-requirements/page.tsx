import type { Metadata } from "next";
import Link from "next/link";

/* ============================
   SEO METADATA
============================ */
export const metadata: Metadata = {
  title: "Stable Diffusion VRAM Requirements (2025) | AgenticEdge",
  description:
    "Understand Stable Diffusion VRAM requirements for SD, SDXL, and advanced models. Learn what you can run with 4GB, 8GB, 12GB, 16GB, and 24GB VRAM.",
};

/* ============================
   GEO-AWARE AFFILIATE LINKS
   (Privacy-first, no tracking)
============================ */
const affiliateLinks = {
  RTX_3060: {
    IN: "https://www.amazon.in/",
    US: "https://www.amazon.com/",
    UK: "https://www.amazon.co.uk/",
  },
  RTX_4090: {
    IN: "https://www.amazon.in/",
    US: "https://www.amazon.com/",
    UK: "https://www.amazon.co.uk/",
  },
};

/* ============================
   SAFE REGION DETECTION
============================ */
function getRegion(): "IN" | "US" | "UK" {
  if (typeof navigator === "undefined") return "US";
  const lang = navigator.language.toLowerCase();
  if (lang.includes("en-in")) return "IN";
  if (lang.includes("en-gb")) return "UK";
  return "US";
}

/* ============================
   PAGE COMPONENT
============================ */
export default function StableDiffusionVRAMRequirements() {
  const region = getRegion();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* ============================
          HERO
      ============================ */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Stable Diffusion VRAM Requirements Explained
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          VRAM is the single most important factor for running Stable Diffusion
          locally. This guide explains exactly what you can run at each VRAM
          level — clearly, honestly, and without hype.
        </p>
      </section>

      {/* ============================
          VRAM TIERS
      ============================ */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <VRAMCard
          title="4 GB VRAM"
          description="Technically possible, practically frustrating."
          points={[
            "Very limited image sizes",
            "Frequent crashes",
            "Not recommended in 2025",
          ]}
        />

        <VRAMCard
          title="8 GB VRAM"
          description="Entry-level Stable Diffusion."
          points={[
            "Basic Stable Diffusion models",
            "Limited SDXL usage",
            "Slow generation speeds",
          ]}
        />

        <VRAMCard
          title="12 GB VRAM"
          description="The practical minimum for serious users."
          points={[
            "Comfortable Stable Diffusion usage",
            "Good LoRA support",
            "Best value tier",
          ]}
          affiliate={affiliateLinks.RTX_3060[region]}
        />

        <VRAMCard
          title="16 GB VRAM"
          description="Ideal for most creators."
          points={[
            "Smooth SDXL performance",
            "Higher resolution outputs",
            "Better batch generation",
          ]}
        />

        <VRAMCard
          title="24 GB+ VRAM"
          description="Professional-grade workflows."
          points={[
            "Large SDXL models",
            "Multiple LoRAs",
            "Fast batch generation",
          ]}
          affiliate={affiliateLinks.RTX_4090[region]}
        />
      </section>

      {/* ============================
          EDUCATIONAL SECTION
      ============================ */}
      <section className="prose max-w-none mb-16">
        <h2>Why Stable Diffusion Needs So Much VRAM</h2>
        <p>
          Stable Diffusion loads entire neural network weights into GPU memory.
          Higher VRAM allows larger models, higher resolutions, faster
          generation, and fewer compromises.
        </p>

        <h3>Why NVIDIA GPUs Are Preferred</h3>
        <ul>
          <li>CUDA & cuDNN optimization</li>
          <li>Better ecosystem support</li>
          <li>More stable drivers for AI workloads</li>
        </ul>
      </section>

      {/* ============================
          INTERNAL LINKING
      ============================ */}
      <section className="border-t pt-8">
        <h3 className="text-lg font-semibold mb-2">
          Recommended Reading
        </h3>
        <ul className="list-disc list-inside text-sm text-blue-600">
          <li>
            <Link href="/best-gpu-for-stable-diffusion">
              Best GPU for Stable Diffusion (Complete Guide)
            </Link>
          </li>
        </ul>
      </section>

      {/* ============================
          PRIVACY STATEMENT
      ============================ */}
      <footer className="mt-16 text-xs text-gray-500">
        No ads. No trackers. No fingerprinting.
        <br />
        AgenticEdge exists to help you make informed AI hardware decisions —
        privately.
      </footer>
    </main>
  );
}

/* ============================
   SAFE VRAM CARD COMPONENT
============================ */
function VRAMCard({
  title,
  description,
  points,
  affiliate,
}: {
  title: string;
  description: string;
  points: string[];
  affiliate?: string;
}) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-4">{description}</p>

      <ul className="text-sm mb-4 space-y-1">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>

      {affiliate && (
        <Link
          href={affiliate}
          className="inline-block text-sm bg-black text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          View Recommended GPU
        </Link>
      )}
    </div>
  );
}
