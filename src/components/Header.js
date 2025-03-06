"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, LogOut } from "lucide-react";
import { IconButton, TextField, Drawer, Badge as MuiBadge, Avatar } from "@mui/material";

// Utility function for className concatenation
const cn = (...inputs) => inputs.filter(Boolean).join(" ");

// Button Component
const buttonVariants = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variant: {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
  },
  size: {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10",
  },
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants.base,
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Input Component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Badge Component
const badgeVariants = {
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  variant: {
    default: "border-transparent bg-green-600 text-white hover:bg-green-700",
  },
};

const Badge = ({ className, variant = "default", ...props }) => {
  return (
    <div
      className={cn(badgeVariants.base, badgeVariants.variant[variant], className)}
      {...props}
    />
  );
};

// Header Component
export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const router = useRouter();

  // Check for token in local storage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set true if token exists, false otherwise
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{ backgroundColor: "rgb(17 24 39)", color: "white" }}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Mobile Menu Drawer */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <div className="w-[300px] sm:w-[400px] p-6">
            <nav className="flex flex-col gap-6 pt-10">
              <button
                className="text-lg font-medium text-left"
                onClick={() => {
                  router.push("/");
                  setIsDrawerOpen(false);
                }}
              >
                Home
              </button>
              {isAuthenticated && (
                <>
                  <button
                    className="text-lg font-medium text-left"
                    onClick={() => {
                      router.push("/dashboard");
                      setIsDrawerOpen(false);
                    }}
                  >
                    Dashboard
                  </button>
                  <button
                    className="text-lg font-medium text-left"
                    onClick={() => {
                      router.push("/AddJob");
                      setIsDrawerOpen(false);
                    }}
                  >
                    Add Job
                  </button>
                </>
              )}
            </nav>
            <IconButton
              className="absolute right-4 top-4"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </IconButton>
          </div>
        </Drawer>

        {/* Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Avatar alt="Logo" src="./logo.jpg" sx={{ width: 50, height: 50 }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-start md:space-x-8">
          <button
            className="text-sm font-medium transition-colors hover:text-green-600"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          {isAuthenticated && (
            <>
              <button
                className="text-sm font-medium transition-colors hover:text-green-600"
                onClick={() => router.push("/dashboard")}
              >
                Dashboard
              </button>
              <button
                className="text-sm font-medium transition-colors hover:text-green-600"
                onClick={() => router.push("/AddJob")}
              >
                Add Job
              </button>
            </>
          )}
        </nav>

        {/* Right Side Actions */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {isSearchOpen ? (
            <div className="relative flex items-center md:w-80">
              <Input type="search" placeholder="Search products..." className="w-full" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

{isAuthenticated && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              localStorage.clear(); // Clear all local storage data
              router.push("/login"); // Redirect to /login
              setIsAuthenticated(false); // Update state to hide Dashboard/Add Job
            }}
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
                    )}

        </div>
      </div>
    </header>
  );
}