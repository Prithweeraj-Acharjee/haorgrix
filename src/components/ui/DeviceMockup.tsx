import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  type?: "browser" | "phone";
  children: React.ReactNode;
  className?: string;
}

export default function DeviceMockup({ type = "browser", children, className }: DeviceMockupProps) {
  if (type === "browser") {
    return (
      <div className={cn("rounded-xl overflow-hidden shadow-lg border border-steel-light", className)}>
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md h-6 max-w-xs" />
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </div>
    );
  }

  return (
    <div className={cn("rounded-[2rem] overflow-hidden shadow-lg border-4 border-gray-800 max-w-[280px]", className)}>
      <div className="bg-gray-800 py-2 flex justify-center">
        <div className="w-20 h-4 bg-gray-900 rounded-full" />
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
