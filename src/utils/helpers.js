import toast from "react-hot-toast";

// Scroll to top
export function handleScroll() {
  if (window) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}

// Factor parameter text
export function factorText(text) {
  return decodeURIComponent(text).toLowerCase().replace(/-/g, " ");
}

// Calculate cart item price
export function factorCartPrice(discount_price, regular_price) {
  if (discount_price > regular_price) return regular_price;

  return discount_price;
}

export function factorLink(text) {
  return decodeURIComponent(text).toLowerCase().replace(/ /g, "-");
}

// Cart toast messages
export function successToast(message) {
  return toast.success(message, {
    duration: 3000,
    style: {
      backgroundColor: "var(--font-color)",
      color: "var(--background)",
    },
  });
}

export function errorToast(message) {
  return toast.error(message, {
    duration: 3000,
    style: {
      backgroundColor: "var(--font-color)",
      color: "var(--background)",
    },
  });
}
