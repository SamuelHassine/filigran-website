import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
  Crosshair,
  Activity,
  Radar,
  type LucideIcon,
} from "lucide-react";
import { customerExperienceItems, customerUseCaseLinks } from "@/data/navigation";

const useCaseIcons: LucideIcon[] = [ShieldCheck, Target, Crosshair, Activity, Radar];
export const CustomersDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => { setIsOpen(true); }}
      onMouseLeave={() => { setIsOpen(false); }}
    >
      <button className="flex items-center gap-1 text-foreground/80 hover:text-cyan transition-colors group py-2">
        Customers
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? "rotate-180 text-cyan" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-[1040px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] divide-y lg:divide-y-0 lg:divide-x divide-border/40">
              <div className="p-6 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan">
                  Use cases
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {customerUseCaseLinks.map((useCase, index) => {
                    const Icon = useCaseIcons[index % useCaseIcons.length];
                    return (
                      <Link
                        key={useCase.link}
                        to={useCase.link}
                        className="group/item flex items-center gap-3 rounded-xl border border-transparent hover:border-cyan/20 hover:bg-cyan/5 px-3 py-3 transition-all duration-300"
                        style={{ animationDelay: `${index * 40}ms` }}
                      >
                        <div className="w-9 h-9 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs md:text-sm text-foreground/80 group-hover/item:text-cyan transition-colors flex-1 leading-tight">
                          {useCase.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan/0 group-hover/item:text-cyan group-hover/item:translate-x-0.5 transition-all -translate-x-1" />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/use-cases"
                  className="inline-flex items-center justify-between rounded-2xl border border-cyan/30 bg-cyan/5 px-5 py-3 text-sm font-semibold text-cyan hover:bg-cyan/10 transition-colors"
                >
                  <span>View all use cases</span>
                  <span aria-hidden className="text-base">
                    ➜
                  </span>
                </Link>
              </div>

              <div className="p-6 flex flex-col gap-4 border border-white/15 bg-white/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-semibold tracking-[0.3em]">
                  <Sparkles className="w-4 h-4" />
                  EXPERIENCE
                </div>
                <div className="space-y-2">
                  {customerExperienceItems.map((item) => {
                    const Icon = item.icon;
                    return item.external ? (
                      <a
                        key={item.title}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-start gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white/90 hover:border-white/60 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-cyan">{item.title}</p>
                          <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-cyan/70 group-hover/item:text-cyan" />
                      </a>
                    ) : (
                      <Link
                        key={item.title}
                        to={item.link}
                        className="group/item flex items-start gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white/90 hover:border-white/60 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-cyan">{item.title}</p>
                          <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-cyan/70 group-hover/item:text-cyan" />
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

