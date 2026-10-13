"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Check,
  Sparkles,
  Code2,
  Globe,
  Layers,
  Workflow,
  ShoppingCart,
  Cpu,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  Layers,
  Workflow,
  ShoppingCart,
  Cpu,
  Cloud,
  Sparkles,
};

const defaultServiceMetadata: Record<
  string,
  { subtitle: string; iconName: string }
> = {
  "Custom Software Development": {
    subtitle: "Bespoke web & enterprise architectures",
    iconName: "Code2",
  },
  "Custom & WordPress Web Development": {
    subtitle: "Bespoke themes & high-speed CMS platforms",
    iconName: "Globe",
  },
  "SaaS Product Engineering": {
    subtitle: "Multi-tenant cloud architectures & subscriptions",
    iconName: "Layers",
  },
  "API and System Integration": {
    subtitle: "REST/GraphQL, webhooks & secure data bridges",
    iconName: "Workflow",
  },
  "E-commerce Technology": {
    subtitle: "Custom transactional stores & catalog sync",
    iconName: "ShoppingCart",
  },
  "Business Process Automation": {
    subtitle: "Event-driven workflows & eliminating manual tasks",
    iconName: "Cpu",
  },
  "Cloud and Application Optimization": {
    subtitle: "Performance tuning, database scaling & security",
    iconName: "Cloud",
  },
  Other: {
    subtitle: "Specialized or proprietary technical requirements",
    iconName: "Sparkles",
  },
};

export interface SelectOption {
  value: string;
  label: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export interface CustomSelectProps {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: readonly (string | SelectOption)[];
  placeholder?: string;
  displayValue?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}

export function CustomSelect({
  id: providedId,
  name,
  value: controlledValue,
  defaultValue = "",
  onChange,
  options,
  placeholder = "Select the service you need...",
  displayValue,
  disabled = false,
  error = false,
  className,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
}: CustomSelectProps) {
  const generatedId = useId();
  const selectId = providedId || generatedId;
  const listboxId = `${selectId}-listbox`;

  // Normalize options to rich metadata format
  const normalizedOptions: SelectOption[] = React.useMemo(() => {
    return options.map((opt) => {
      if (typeof opt === "string") {
        const meta = defaultServiceMetadata[opt];
        const IconComponent = meta?.iconName ? iconMap[meta.iconName] : undefined;
        return {
          value: opt,
          label: opt,
          subtitle: meta?.subtitle,
          icon: IconComponent ? <IconComponent className="w-4 h-4" /> : undefined,
        };
      }
      return opt;
    });
  }, [options]);

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(
    controlledValue !== undefined ? controlledValue : defaultValue
  );
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Sync internal value if controlled
  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  // Isolate scroll to options list until boundary (last/first option) is reached,
  // at which point wheel events chain naturally to scroll the page.
  useEffect(() => {
    const panelEl = panelRef.current;
    const listEl = listboxRef.current;
    if (!panelEl || !listEl || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      if (delta === 0) return;

      const atTop = listEl.scrollTop <= 0;
      const maxScroll = listEl.scrollHeight - listEl.clientHeight;
      const atBottom = Math.ceil(listEl.scrollTop) >= maxScroll - 2;

      // Scrolling down and NOT at bottom: scroll list only, prevent page scroll
      if (delta > 0 && !atBottom) {
        listEl.scrollTop = Math.min(maxScroll, listEl.scrollTop + delta);
        e.preventDefault();
        e.stopPropagation();
      }
      // Scrolling up and NOT at top: scroll list only, prevent page scroll
      else if (delta < 0 && !atTop) {
        listEl.scrollTop = Math.max(0, listEl.scrollTop + delta);
        e.preventDefault();
        e.stopPropagation();
      }
      // Boundary reached: scrolling down past last option OR scrolling up past first option:
      // We do not preventDefault/stopPropagation, so the wheel event bubbles up and scrolls the page!
    };

    panelEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      panelEl.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = normalizedOptions.find((opt) => opt.value === currentValue);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listboxRef.current) {
      const items = listboxRef.current.querySelectorAll<HTMLLIElement>('[role="option"]');
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (val: string) => {
    if (disabled) return;
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      const selectedIdx = normalizedOptions.findIndex((opt) => opt.value === currentValue);
      setHighlightedIndex(selectedIdx >= 0 ? selectedIdx : 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen) {
          if (highlightedIndex >= 0 && highlightedIndex < normalizedOptions.length) {
            handleSelect(normalizedOptions[highlightedIndex].value);
          }
        } else {
          toggleOpen();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(0);
        } else {
          setHighlightedIndex((prev) =>
            prev < normalizedOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(normalizedOptions.length - 1);
        } else {
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : normalizedOptions.length - 1
          );
        }
        break;
      case "Escape":
      case "Tab":
        if (isOpen) {
          setIsOpen(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full select-none", className)}>
      {/* Hidden input for form submission */}
      {name && <input type="hidden" name={name} value={currentValue} />}

      {/* Main Trigger Button */}
      <button
        type="button"
        id={selectId}
        disabled={disabled}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-invalid={ariaInvalid || error}
        aria-describedby={ariaDescribedBy}
        className={cn(
          "w-full px-4 py-3.5 rounded-2xl text-left flex items-center justify-between transition-all duration-200 cursor-pointer shadow-2xs group relative",
          "bg-white border text-[#273138]",
          error
            ? "border-rose-400 ring-2 ring-rose-500/10 focus:border-rose-500 focus:ring-rose-500/20"
            : isOpen
            ? "border-[#C59B27] ring-2 ring-[#C59B27]/25 shadow-lg bg-[#FAF7F0]"
            : "border-[#DFD9CD] hover:border-[#C59B27]/80 hover:bg-[#FCFAF6] focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20",
          disabled && "opacity-60 cursor-not-allowed bg-slate-100 border-slate-200"
        )}
      >
        <div className="flex items-center gap-3 truncate min-w-0">
          {selectedOption ? (
            <>
              <div className="w-9 h-9 rounded-xl bg-[#FAF4E4] border border-[#E8D7A5] flex items-center justify-center text-[#8C6D15] shrink-0 shadow-2xs">
                {selectedOption.icon || <Sparkles className="w-4 h-4" />}
              </div>
              <div className="truncate text-left">
                <span className="block truncate text-sm font-bold text-[#181F28] leading-tight">
                  {selectedOption.value === "Other" && displayValue?.trim()
                    ? displayValue.trim()
                    : selectedOption.label}
                </span>
                <span className="block truncate text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                  {selectedOption.value === "Other" && displayValue?.trim()
                    ? "Custom Specified Requirement"
                    : selectedOption.subtitle}
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF7F0] border border-[#DFD9CD] flex items-center justify-center text-slate-400 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 text-sm font-medium block">
                  {placeholder}
                </span>
                <span className="text-[11px] text-slate-400 font-normal block mt-0.5">
                  Click to view all engineering scopes
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center pl-3 shrink-0">
          <div
            className={cn(
              "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 border",
              isOpen
                ? "bg-[#C59B27] text-white border-[#C59B27] shadow-sm rotate-180"
                : "bg-[#FAF7F0] text-slate-500 border-[#DFD9CD] group-hover:text-[#8C6D15] group-hover:border-[#E8D7A5] group-hover:bg-[#FAF4E4]"
            )}
          >
            <ChevronDown className="w-4 h-4 transition-transform duration-200" />
          </div>
        </div>
      </button>

      {/* Floating Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-[#FAF7F0] border border-[#D5CDBC] rounded-3xl shadow-[0_20px_50px_-10px_rgba(24,31,40,0.22)] overflow-hidden backdrop-blur-xl"
            style={{ transformOrigin: "top center" }}
          >
            {/* Top gold ambient line */}
            <div className="h-1 bg-gradient-to-r from-[#C59B27]/10 via-[#C59B27] to-[#C59B27]/10" />

            {/* Panel Header */}
            <div className="px-5 py-3 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-600 border-b border-[#E8DFC9] bg-[#F5EFE3]">
              <span className="font-bold text-[#273138] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Service Capabilities</span>
              </span>
              <span className="text-[11px] font-semibold text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2 py-0.5 rounded-full">
                {normalizedOptions.length} Options
              </span>
            </div>

            {/* Options List */}
            <ul
              ref={listboxRef}
              id={listboxId}
              role="listbox"
              tabIndex={-1}
              aria-label={placeholder}
              className="max-h-72 overflow-y-auto overscroll-y-auto p-2 space-y-1.5 focus:outline-hidden custom-scrollbar"
            >
              {normalizedOptions.map((opt, index) => {
                const isSelected = opt.value === currentValue;
                const isHighlighted = index === highlightedIndex;

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={cn(
                      "p-3 rounded-2xl transition-all duration-150 flex items-center justify-between cursor-pointer group/item border",
                      isSelected
                        ? "bg-[#EAE0CA] border-[#C59B27] text-[#181F28] shadow-xs"
                        : isHighlighted
                        ? "bg-[#F2EADA] border-[#DED4C1] text-[#181F28]"
                        : "bg-transparent border-transparent text-[#273138] hover:bg-[#F2EADA] hover:border-[#DED4C1]"
                    )}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 border",
                          isSelected
                            ? "bg-[#C59B27] text-white border-[#C59B27] shadow-sm scale-105"
                            : isHighlighted
                            ? "bg-white text-[#8C6D15] border-[#DFD9CD] shadow-2xs"
                            : "bg-white/80 text-slate-600 border-[#DFD9CD] group-hover/item:border-[#C59B27]/50 group-hover/item:text-[#8C6D15]"
                        )}
                      >
                        {opt.icon || <Sparkles className="w-4 h-4" />}
                      </div>

                      <div className="truncate text-left">
                        <span
                          className={cn(
                            "block text-sm leading-snug font-bold truncate transition-colors",
                            isSelected
                              ? "text-[#181F28]"
                              : "text-[#273138] group-hover/item:text-[#181F28]"
                          )}
                        >
                          {opt.label}
                        </span>
                        {opt.subtitle && (
                          <span
                            className={cn(
                              "block text-xs leading-tight truncate mt-0.5",
                              isSelected ? "text-slate-700" : "text-slate-500"
                            )}
                          >
                            {opt.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pl-3 shrink-0">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-[#C59B27] text-white flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-transparent group-hover/item:border-[#C59B27]/40 flex items-center justify-center text-transparent group-hover/item:text-[#C59B27]/60 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
