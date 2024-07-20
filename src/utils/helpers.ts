import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { format, parseISO } from "date-fns";

/**
 * Returns passed url with basePath (from next.config.js) prefix.
 * @param url url (e.g. "/url")
 */
const withBasePath = (url: string): string => {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return `${process.env.NEXT_PUBLIC_BASE_PATH}${url}`;
  }
  return url;
};
/**
 * to make the capitalize the first letter
 * @param string string to format
 * @returns `string`
 */
const capitalizeFirstLetter = (string: string) => {
  if (string.length === 0) {
    return string; // Return an empty string if the input is empty
  }
  return string[0].toUpperCase() + string.slice(1);
};

/**
 * to download the file using the provided content
 * @param data file stringified content
 * @param name file name
 * @param mimeType file content type
 * @returns `void`
 */
const downloadFile = (data: string, name: string, mimeType = "application/json") => {
  const blob = new Blob([data], { type: mimeType });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
/**
 * to short the string
 * @param string string to format
 * @returns `string`
 */
const toShortString = (string: string, startCharCount = 5, endCharCount = 5) => {
  const finalEndCharCount =
    string.length - startCharCount > endCharCount
      ? endCharCount
      : string.length - startCharCount < 0
        ? 0
        : string.length - startCharCount;
  return `${string.slice(0, startCharCount)}....${string.slice(string.length - finalEndCharCount, string.length)}`;
};

const isMobile = () => {
  if (typeof window !== "undefined") {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      window.navigator.userAgent,
    );
  }
  return false;
};

/** twMerge + clsx */
const tx = (...values: ClassValue[]) => {
  return twMerge(clsx(values));
};

export const EmailCheck = (value: string) => {
  return /\S+@\S+\.\S+/.test(value);
};

const formatDate = (date?: Date | string) => {
  if (!date) {
    return "NA";
  }

  const isString = typeof date == "string";
  return format(parseISO(isString ? date : date.toUTCString()), "dd MMM yyyy, hh:mm a");
};

const calculateDate = (days: number) => {
  // Create a new date object with the current date
  const currentDate = new Date();

  // Calculate the new date by adding/subtracting the specified number of days
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + days);

  return newDate;
};
export { withBasePath, calculateDate, capitalizeFirstLetter, toShortString, downloadFile, isMobile, tx, formatDate };
