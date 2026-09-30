import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FiCheck,
  FiLoader,
  FiArrowRight,
  FiRefreshCw
} from "react-icons/fi";
import "./SubscriptionSuccess.css";

export default function SubscriptionSuccess() {
  const [searchParams] =
    useSearchParams();

  const [status, setStatus] =
    useState("checking");

  const [attempts, setAttempts] =
    useState(0);

  async function checkSubscription() {
    try {
      const response =
        await fetch(
          "http://localhost:5000/api/subscriptions/me",
          {
            credentials: "include"
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to verify subscription."
        );
      }

      const subscription =
        data.subscription;

      if (
        subscription &&
        subscription.provider ===
          "stripe" &&
        (
          subscription.status ===
            "active" ||
          subscription.status ===
            "trialing"
        )
      ) {
        setStatus("success");
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  useEffect(() => {
    let cancelled = false;

    async function verify() {
      for (
        let attempt = 0;
        attempt < 10;
        attempt++
      ) {
        if (cancelled) {
          return;
        }

        setAttempts(
          attempt + 1
        );

        const success =
          await checkSubscription();

        if (success) {
          return;
        }

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              2000
            )
        );
      }

      if (!cancelled) {
        setStatus("pending");
      }
    }

    verify();

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "checking") {
    return (
      <main className="success-page">
        <section className="success-card">
          <div className="success-loader">
            <FiLoader className="spin" />
          </div>

          <span className="success-eyebrow">
            PAYMENT RECEIVED
          </span>

          <h1>
            Confirming your subscription
          </h1>

          <p>
            Stripe has received your
            payment. We are waiting for
            the subscription confirmation
            to arrive.
          </p>

          <div className="verification-progress">
            <span>
              Verification attempt{" "}
              {attempts}/10
            </span>

            <div>
              <span
                style={{
                  width: `${Math.min(
                    attempts * 10,
                    100
                  )}%`
                }}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (status === "pending") {
    return (
      <main className="success-page">
        <section className="success-card">
          <div className="success-pending-icon">
            <FiRefreshCw />
          </div>

          <span className="success-eyebrow">
            PAYMENT COMPLETED
          </span>

          <h1>
            Your payment was received
          </h1>

          <p>
            Your subscription is still
            being synchronized. This can
            take a short moment.
          </p>

          {searchParams.get(
            "session_id"
          ) && (
            <div className="session-reference">
              Session confirmed
            </div>
          )}

          <div className="success-actions">
            <Link to="/subscription">
              Open subscription
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="success-page">
      <section className="success-card success-card-complete">
        <div className="success-check">
          <FiCheck />
        </div>

        <span className="success-eyebrow">
          SUBSCRIPTION ACTIVE
        </span>

        <h1>
          Welcome to your new plan
        </h1>

        <p>
          Your payment has been
          confirmed and your Qevora
          subscription is now active.
        </p>

        <div className="success-confirmation">
          <FiCheck />
          <span>
            Payment successfully
            processed
          </span>
        </div>

        <div className="success-actions">
          <Link to="/subscription">
            Manage subscription
            <FiArrowRight />
          </Link>

          <Link
            className="secondary"
            to="/dashboard"
          >
            Go to dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}