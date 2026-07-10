import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";

interface WebsiteCheckupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  websiteUrl: "",
  message: "",
};

const WebsiteCheckupModal = ({isOpen,onClose,}: WebsiteCheckupModalProps) => 
{
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const focusTimer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Website checkup form:", formData);

    setFormData(initialFormData);

    onClose();
  };

 const handleBackdropClick = (event: MouseEvent<HTMLDivElement>,) => {
  if (event.target === event.currentTarget) {
    onClose();
  }
};

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onMouseDown={handleBackdropClick}
      className="
        fixed
        inset-0
        z-[100]
        overflow-y-auto
        bg-[#ecfaf5]/90
        px-4
        py-16
        backdrop-blur-[1px]

        sm:px-6

        md:py-20

        dark:bg-[#07110f]/90
      "
    >
      <div
        className="
          flex
          min-h-full
          items-start
          justify-center

          md:items-center
        "
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="website-checkup-title"
          className="
            relative
            w-full
            max-w-[740px]
            rounded-[10px]
            bg-white
            px-6
            pb-10
            pt-12
            shadow-[0_10px_35px_rgba(0,191,125,0.14)]

            sm:px-8

            md:px-12
            md:pb-12
            md:pt-12

            dark:bg-[#172033]
            dark:shadow-[0_10px_35px_rgba(0,191,125,0.12)]
          "
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close website checkup form"
            className="
              absolute
              -right-2
              -top-6
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#111827]
              shadow-[0_5px_20px_rgba(0,191,125,0.12)]
              transition-colors

              hover:text-[#00bf7d]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#00bf7d]

              sm:-right-4
              sm:-top-5

              dark:bg-[#111827]
              dark:text-white
              dark:hover:text-[#00bf7d]
            "
          >
            <CloseIcon />
          </button>

          {/* HEADING */}

          <h2
            id="website-checkup-title"
            className="
              max-w-[600px]
              text-[30px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-black

              sm:text-[34px]

              md:text-[38px]

              dark:text-white
            "
          >
            Get Your Free Website Checkup
          </h2>

          <p
            className="
              mt-5
              max-w-[580px]
              text-[16px]
              leading-7
              text-[#111827]

              md:text-[17px]

              dark:text-[#cbd5e1]
            "
          >
            Discover main benefits and issues of your website and how to fix
            them.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >
            <div
              className="
                grid
                grid-cols-2
                gap-x-3
                gap-y-7

                sm:gap-x-6
              "
            >
              <FormInput
                ref={firstInputRef}
                name="fullName"
                type="text"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <FormInput
                name="email"
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <FormInput
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <FormInput
                name="websiteUrl"
                type="url"
                placeholder="Website Url"
                value={formData.websiteUrl}
                onChange={handleChange}
              />

              {/* MESSAGE */}

              <div className="col-span-2">
                <label htmlFor="checkup-message" className="sr-only">
                  Message
                </label>

                <textarea
                  id="checkup-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  rows={6}
                  className="
                    min-h-[180px]
                    w-full
                    resize-none
                    rounded-[10px]
                    border-2
                    border-[#a6afbf]
                    bg-white
                    px-4
                    py-4
                    text-[16px]
                    text-[#111827]
                    outline-none
                    transition

                    placeholder:text-[#5f6979]

                    focus:border-[#00bf7d]
                    focus:ring-2
                    focus:ring-[#00bf7d]/20

                    sm:px-5

                    md:min-h-[190px]

                    dark:border-[#64748b]
                    dark:bg-[#111827]
                    dark:text-white
                    dark:placeholder:text-[#94a3b8]
                  "
                />
              </div>
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="
                mt-7
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-[4px]
                bg-[#00bf7d]
                px-8
                text-[15px]
                font-semibold
                text-white
                transition-colors

                hover:bg-[#00a96f]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#00bf7d]
                focus-visible:ring-offset-4

                dark:focus-visible:ring-offset-[#172033]
              "
            >
              Get My Free Checkup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface FormInputProps {
  name: keyof FormData;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
}

import { forwardRef } from "react";

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      name,
      type,
      placeholder,
      value,
      onChange,
      required = false,
    },
    ref,
  ) => {
    const inputId = `checkup-${name}`;

    return (
      <div className="min-w-0">
        <label htmlFor={inputId} className="sr-only">
          {placeholder.replace("*", "")}
        </label>

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="
            h-[58px]
            w-full
            min-w-0
            rounded-[10px]
            border-2
            border-[#a6afbf]
            bg-white
            px-3
            text-[15px]
            text-[#111827]
            outline-none
            transition

            placeholder:text-[#5f6979]

            focus:border-[#00bf7d]
            focus:ring-2
            focus:ring-[#00bf7d]/20

            sm:px-4
            sm:text-[16px]

            dark:border-[#64748b]
            dark:bg-[#111827]
            dark:text-white
            dark:placeholder:text-[#94a3b8]
          "
        />
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

const CloseIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WebsiteCheckupModal;