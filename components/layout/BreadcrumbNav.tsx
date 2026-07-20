import { ChevronRight } from 'lucide-react';

export function BreadcrumbNav() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <span>Overview</span>
      <ChevronRight className="h-4 w-4" />
      <span className="text-secondary">Production</span>
    </div>
  );
}
