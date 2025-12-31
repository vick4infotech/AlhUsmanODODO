import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <section className="section">
        <div className="container-pad">
          <div className="card p-10">
            <div className="kicker">404</div>
            <h1 className="mt-6 font-display text-4xl font-bold text-kogi-green">
              Page not found
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-black/70">
              The page you requested does not exist. Please use the navigation menu to return to the official portfolio.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/" variant="secondary">
                Return to home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
