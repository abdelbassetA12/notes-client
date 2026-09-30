import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FiCheck,
  FiLoader,
  FiArrowRight,
  FiRefreshCw
} from "react-icons/fi";
import "./SubscriptionSuccess.css";
import API_BASE from "../../config/api";

export default function SubscriptionSuccess() {
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("checking");
  const [attempts, setAttempts] = useState(0);

  const transactionId = searchParams.get("_ptxn");

  useEffect(() => {
    let cancelled = false;

    async function checkSubscription() {
      try {
        const response = await fetch(
          `${API_BASE}/api/subscriptions/me`,
          {
            credentials: "include"
          }
        );

        if (!response.ok) {
          return false;
        }

        const data = await response.json();
        const subscription = data?.subscription;

        /*
         * IMPORTANT:
         * Do not consider the subscription successful just because
         * a local/internal subscription exists.
         *
         * Paddle success requires:
         * - provider === "paddle"
         * - real Paddle subscription ID
         * - active or trialing status
         */
        if (
          subscription &&
          subscription.provider === "paddle" &&
          subscription.providerSubscriptionId &&
          (
            subscription.status === "active" ||
            subscription.status === "trialing"
          )
        ) {
          setStatus("success");
          return true;
        }

        return false;
      } catch (error) {
        console.error(
          "Subscription verification error:",
          error
        );

        return false;
      }
    }

    async function verify() {
      for (let attempt = 0; attempt < 10; attempt++) {
        if (cancelled) return;

        setAttempts(attempt + 1);

        const success = await checkSubscription();

        if (success) {
          return;
        }

        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
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

  /*
   * PAYMENT CONFIRMING
   */
  if (status === "checking") {
    return (
      <main className="subscription-success-page">
        <section className="subscription-success-card">

          <div className="success-icon loading">
            <FiLoader className="spin" />
          </div>

          <span className="success-label">
            PAYMENT RECEIVED
          </span>

          <h1>
            Confirming your subscription
          </h1>

          <p>
            Paddle has received your payment. We are waiting
            for the subscription confirmation to arrive.
          </p>

          <div className="verification-status">
            <FiLoader className="spin" />

            <span>
              Verifying payment...
            </span>
          </div>

          <small>
            Attempt {attempts} of 10
          </small>

        </section>
      </main>
    );
  }

  /*
   * SUBSCRIPTION CONFIRMED
   */
  if (status === "success") {
    return (
      <main className="subscription-success-page">
        <section className="subscription-success-card">

          <div className="success-icon">
            <FiCheck />
          </div>

          <span className="success-label">
            SUBSCRIPTION ACTIVE
          </span>

          <h1>
            Welcome to your new plan
          </h1>

          <p>
            Your payment has been confirmed and your
            Qevora subscription is now active.
          </p>

          <div className="payment-confirmed">
            <FiCheck />

            <span>
              Payment successfully processed
            </span>
          </div>

          {transactionId && (
            <div className="session-reference">
              Transaction: {transactionId}
            </div>
          )}

          <Link
            to="/subscription"
            className="success-button"
          >
            Continue to subscription
            <FiArrowRight />
          </Link>

        </section>
      </main>
    );
  }

  /*
   * PAYMENT RECEIVED BUT WEBHOOK NOT YET CONFIRMED
   */
  return (
    <main className="subscription-success-page">
      <section className="subscription-success-card">

        <div className="success-icon pending">
          <FiRefreshCw />
        </div>

        <span className="success-label">
          PAYMENT PROCESSING
        </span>

        <h1>
          Your payment is being processed
        </h1>

        <p>
          Paddle has returned you successfully, but the
          subscription confirmation has not reached Qevora yet.
          Your payment should be confirmed automatically.
        </p>

        {transactionId && (
          <div className="session-reference">
            Transaction: {transactionId}
          </div>
        )}

        <button
          type="button"
          className="success-button secondary"
          onClick={() => window.location.reload()}
        >
          <FiRefreshCw />
          Check again
        </button>

        <Link
          to="/subscription"
          className="back-link"
        >
          Back to subscription
        </Link>

      </section>
    </main>
  );
}