import React, { forwardRef, InputHTMLAttributes } from "react";
import { useState, useMemo, useCallback } from "react";

type Size = "md" | "lg";

export interface TelegramSearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size" | "onSubmit"> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;   // our custom handler
  onClear?: () => void;
  size?: Size;
  className?: string;
}


export const TelegramSearchBar = forwardRef<
  HTMLInputElement,
  TelegramSearchBarProps
>(
  (
    {
      value,
      defaultValue,
      onChange,
      onSubmit,
      onClear,
      placeholder = "Search",
      autoFocus,
      disabled,
      size = "md",
      className = "",
      ...inputProps
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const [inner, setInner] = useState(defaultValue ?? "");
    const current = isControlled ? (value as string) : inner;

    const sizing = useMemo(() => {
      return size === "lg"
        ? {
            container: "h-10 px-3",
            input: "text-[16px] leading-10",
            icon: "h-5 w-5",
          }
        : {
            container: "h-9 px-3",
            input: "text-[15px] leading-9",
            icon: "h-4 w-4",
          };
    }, [size]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        if (!isControlled) setInner(v);
        onChange?.(v);
      },
      [isControlled, onChange]
    );

    const handleClear = useCallback(() => {
      if (!isControlled) setInner("");
      onChange?.("");
      onClear?.();
    }, [isControlled, onChange, onClear]);

    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(current ?? "");
      },
      [current, onSubmit]
    );

    return (
      <form role="search" onSubmit={handleSubmit} className={className}>
        <div
          className={[
            "group relative flex items-center rounded-full",
            // Telegram theme variables
            "bg-[var(--tgui--secondary_bg_color)]",
            "text-[var(--tgui--text_color)]",
            "shadow-sm",
            "focus-within:ring-1 focus-within:ring-[var(--tgui--section_separator_color)]",
            sizing.container,
          ].join(" ")}
        >
          {/* Left search icon */}
          <svg
            aria-hidden="true"
            className={`mr-2 opacity-70 shrink-0 ${sizing.icon}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
          </svg>

          {/* Actual input */}
          <input
            ref={ref}
            type="search"
            inputMode="search"
            autoFocus={autoFocus}
            disabled={disabled}
            placeholder={placeholder}
            value={current}
            onChange={handleChange}
            className={[
              "w-full bg-transparent outline-none border-0",
              // single-line, vertically centered
              sizing.input,
              // platform tweaks
              "appearance-none",
              // placeholder color via Telegram theme var (fallbacks if var missing)
              "placeholder:text-[var(--tgui--hint_color)]",
              "placeholder:opacity-80",
              // remove iOS clear button (we provide our own)
              "[&::-webkit-search-cancel-button]:hidden",
            ].join(" ")}
            {...inputProps}
          />

          {/* Clear button */}
          {current && !disabled && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={handleClear}
              className="ml-2 grid place-items-center rounded-full h-6 w-6 
                         text-[var(--tgui--hint_color)] hover:opacity-80 
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-[var(--tgui--section_separator_color)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z" />
              </svg>
            </button>
          )}
        </div>
      </form>
    );
  }
);

TelegramSearchBar.displayName = "TelegramSearchBar";
