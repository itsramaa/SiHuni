"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboboxOption = {
  value: string;
  label: string;
};

type ComboboxProps = {
  options: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  className?: string;
  searchEnabled?: boolean; // add a prop to enable/disable search
};

export function Combobox({
  options,
  placeholder = "Select option...",
  searchPlaceholder = "Search option...",
  emptyMessage = "No option found.",
  onChange,
  value: valueProp,
  defaultValue,
  className,
  searchEnabled = true, // default search is enabled
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  // If defaultValue is not provided, use the first option's value
  const resolvedDefaultValue =
    defaultValue !== undefined
      ? defaultValue
      : options.length > 0
        ? options[0].value
        : "";

  const [internalValue, setInternalValue] = React.useState<string>("");
  const [searchTerm, setSearchTerm] = React.useState("");

  // Setup default value only once, if valueProp is not provided
  React.useEffect(() => {
    if (
      valueProp === undefined &&
      resolvedDefaultValue !== undefined &&
      internalValue === ""
    ) {
      setInternalValue(resolvedDefaultValue);
    }
  }, [resolvedDefaultValue, valueProp]);

  const value =
    valueProp !== undefined
      ? valueProp
      : internalValue;

  // Filter options if search is enabled
  const filteredOptions = React.useMemo(() => {
    if (!searchEnabled || !searchTerm) return options;
    const lowered = searchTerm.toLowerCase();
    return options.filter(opt =>
      opt.label.toLowerCase().includes(lowered) ||
      opt.value.toLowerCase().includes(lowered)
    );
  }, [options, searchEnabled, searchTerm]);

  const handleSelect = (currentValue: string) => {
    const nextValue = currentValue === value ? "" : currentValue;
    if (onChange) {
      onChange(nextValue);
    }
    if (valueProp === undefined) {
      setInternalValue(nextValue);
    }
    setOpen(false);
    setSearchTerm(""); // Reset search when closed
  };

  // If search is not enabled, skip rendering the input and always show all options
  return (
    <Popover open={open} onOpenChange={(isOpen) => { setOpen(isOpen); if (!isOpen) setSearchTerm(""); }}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", className)}
        >
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {searchEnabled && (
            <CommandInput
              placeholder={searchPlaceholder}
              className="h-9"
              value={searchTerm}
              onValueChange={setSearchTerm}
            />
          )}
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
