import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { companyLinks } from '@/data/navigation';

export const CompanyDropdown = () => {
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
        Company
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-cyan' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-[400px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="p-4 grid gap-2">
              {companyLinks.map((item, index) => {
                const Icon = item.icon;
                return item.external ? (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold group-hover/item:text-cyan transition-colors flex items-center gap-1.5">
                          {item.name}
                          <ArrowUpRight
                            className="w-4 h-4 text-cyan/60 group-hover/item:text-cyan transition-colors"
                            aria-hidden="true"
                          />
                        </h3>
                        <p className="text-sm text-foreground/60">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="group/item p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold group-hover/item:text-cyan transition-colors flex items-center gap-1.5">
                          {item.name}
                        </h3>
                        <p className="text-sm text-foreground/60">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
