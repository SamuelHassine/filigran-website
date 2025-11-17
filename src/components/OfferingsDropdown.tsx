import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { productOfferings, serviceOfferings } from '@/data/navigation';

export const OfferingsDropdown = () => {
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
        Offerings
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-cyan' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-[780px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
              <div className="p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-3">Products</h3>
                <div className="space-y-2">
                  {productOfferings.map((offering, index) => {
                    const Icon = offering.icon;
                    return (
                      <Link
                        key={offering.name}
                        to={offering.link}
                        className="group/item p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20 flex items-start gap-3"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold group-hover/item:text-cyan transition-colors">
                            {offering.name}
                          </h3>
                          <p className="text-sm text-foreground/60">{offering.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-3">Services</h3>
                <div className="space-y-2">
                  {serviceOfferings.map((offering, index) => {
                    const Icon = offering.icon;
                    return (
                      <Link
                        key={offering.name}
                        to={offering.link}
                        className="group/item p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20 flex items-start gap-3"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold group-hover/item:text-cyan transition-colors">
                            {offering.name}
                          </h3>
                          <p className="text-sm text-foreground/60">{offering.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
