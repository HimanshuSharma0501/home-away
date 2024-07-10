type NavLink = {
  href: String;
  label: String;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/favorites", label: "favorites" },
  { href: "/bookings", label: "bookings" },
  { href: "/reviews", label: "reviews" },
  { href: "/rentals/create", label: "create rentals" },
  { href: "/rentals", label: "rentals" },
  { href: "/profile", label: "profile" },
];
