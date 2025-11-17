import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { resourcesDiscoverColumn, resourcesProductsColumn } from '@/data/navigation';

export const ResourcesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => { setIsOpen(true); }}
      onMouseLeave={() => { setIsOpen(false); }}
    >
      <button
        className="flex items-center gap-1 text-foreground/80 hover:text-cyan transition-colors group py-2"
      >
        Resources
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-cyan' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-[760px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="grid grid-cols-2 divide-x divide-border/40">
              <div className="p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-3">Products</h3>
                <div className="space-y-2">
                  {resourcesProductsColumn.map((resource, index) => (
                    <a
                      key={resource.name}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex gap-3 p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ResourceIcon icon={resource.icon} />
                      <div className="flex-1">
                        <h3 className="text-base font-semibold group-hover/item:text-cyan transition-colors inline-flex items-center gap-1">
                          {resource.name}
                          <ArrowUpRight className="w-3.5 h-3.5 text-foreground/40 group-hover/item:text-cyan transition-colors" />
                        </h3>
                        <p className="text-sm text-foreground/60">{resource.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-3">Discover</h3>
                <div className="space-y-2">
                  {resourcesDiscoverColumn.map((resource, index) => (
                    <Link
                      key={resource.name}
                      to={resource.link}
                      className="group/item flex gap-3 p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ResourceIcon icon={resource.icon} />
                      <div>
                        <h3 className="text-base font-semibold group-hover/item:text-cyan transition-colors">
                          {resource.name}
                        </h3>
                        <p className="text-sm text-foreground/60">{resource.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ResourceIcon = ({ icon: Icon }: { icon?: LucideIcon }) => (
  <div className="relative flex-none w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-xl bg-cyan/10 flex items-center justify-center transition-all before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-cyan/30 before:blur-xl before:opacity-0 before:content-[''] group-hover/item:before:opacity-100 group-hover/item:scale-105">
    {Icon && <Icon className="w-5 h-5 text-cyan" />}
  </div>
);
