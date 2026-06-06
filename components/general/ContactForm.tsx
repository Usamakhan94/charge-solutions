"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef, useEffect, useMemo } from "react";
import { getCountryDataList, getEmojiFlag } from "countries-list";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ALL_COUNTRIES = getCountryDataList()
  .map((c) => ({
    code: c.iso2,
    name: c.name,
    dial: `+${c.phone[0]}`,
    // flag: getEmojiFlag(c.iso2),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const PRODUCTS = ["CSI 2000", "CSI 3000", "CSI Pro", "Enterprise Suite"];

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  countryCode: z.string(),
  phoneNumber: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^\d+$/, "Digits only"),
  email: z.string().email("Enter a valid email address"),
  interest: z.string().min(1, "Please select a product"),
});

type FormValues = z.infer<typeof schema>;

function CountrySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () =>
      ALL_COUNTRIES.find((c) => c.code === value) ??
      ALL_COUNTRIES.find((c) => c.code === "US")!,
    [value],
  );

  const filtered = useMemo(
    () =>
      ALL_COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search),
      ),
    [search],
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#3c4049] border border-transparent text-[#c8cdd6] text-sm whitespace-nowrap w-full hover:bg-[#444952] transition-colors focus:outline-none"
      >
        <span className="truncate">
          {selected.name} ({selected.dial})
        </span>
        <svg
          className="ml-1 shrink-0 opacity-60"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-[calc(100%+4px)] left-0 z-50 bg-[#2e3039] border border-[#4a4d57] rounded-md w-64 shadow-xl overflow-hidden">
          <div className="p-2">
            <input
              autoFocus
              placeholder="Search country or dial code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#3c4049] border-none rounded px-3 py-1.5 text-sm text-[#c8cdd6] placeholder:text-[#6b7280] outline-none"
            />
          </div>
          <ul className="overflow-y-auto max-h-52">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-[#6b7280] text-center">
                No results found
              </li>
            )}
            {filtered.map((c) => (
              <li
                key={c.code}
                onClick={() => {
                  onChange(c.code);
                  setOpen(false);
                  setSearch("");
                }}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-sm transition-colors hover:bg-[#3c4049] ${
                  c.code === value
                    ? "text-[#8dc63f] bg-[#8dc63f]/10"
                    : "text-[#c8cdd6]"
                }`}
              >
                <span className="flex-1 truncate">{c.name}</span>
                <span className="text-[#6b7280] text-xs shrink-0">
                  {c.dial}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { countryCode: "US", interest: "CSI 2000" },
  });

  const onSubmit = (data: FormValues) => {
    const country = ALL_COUNTRIES.find((c) => c.code === data.countryCode);
    console.log({ ...data, fullPhone: `${country?.dial}${data.phoneNumber}` });
  };

  const inputClass =
    "bg-[rgba(217,217,217,0.1)] border-transparent text-[#c8cdd6] placeholder:text-[#6b7280] focus-visible:border-[#5a5f6b] rounded-none min-h-12.5 focus-visible:ring-0 focus-visible:ring-offset-0";

  const labelClass = " text-white! text-body font-normal";

  return (
    <div className="bg-white/10 p-11.25 max-w-121 md:ml-auto">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FieldGroup className="gap-5">
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className={labelClass}>
                  Full Name
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder=""
                  className={inputClass}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Field data-invalid={!!errors.phoneNumber}>
            <FieldLabel className={labelClass}>Phone Number</FieldLabel>
            <div className="flex gap-3 [&_button]:rounded-none [&_button]:bg-[rgba(217,217,217,0.1)] [&_button]:min-h-12.5">
              <Controller
                name="countryCode"
                control={control}
                render={({ field }) => (
                  <CountrySelector
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    placeholder=""
                    aria-invalid={fieldState.invalid}
                    className={`${inputClass} flex-1`}
                  />
                )}
              />
            </div>
            {errors.phoneNumber && <FieldError errors={[errors.phoneNumber]} />}
          </Field>

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className={labelClass}>
                  Email Address
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="example@mail.com"
                  aria-invalid={fieldState.invalid}
                  className={inputClass}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="interest"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className={labelClass}>
                  I'm interested in
                </FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    className={`${inputClass} data-[placeholder]:text-[#6b7280]`}
                  >
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2e3039] border-[#4a4d57] text-[#c8cdd6]">
                    {PRODUCTS.map((p) => (
                      <SelectItem
                        key={p}
                        value={p}
                        className="focus:bg-[#3c4049] focus:text-[#c8cdd6]"
                      >
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button className="mt-7.5 text-body!" type="submit">
          Get A Quote
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
