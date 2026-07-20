import { ChevronRight } from 'lucide-react';

export function BreadcrumbNav() {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <span>Overview</span>
      <ChevronRight className="h-4 w-4" />
      <span className="text-slate-200">Production</span>
    </div>
  );
}
