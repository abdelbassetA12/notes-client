 
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { initializePaddle } from "@paddle/paddle-js";
import API_BASE from "../../config/api";

import {
  FiCheck,
  FiX,
  FiZap,
  FiCreditCard,
  FiFileText,
  FiRefreshCw,
  FiAlertCircle,
  FiArrowUp,
  FiArrowDown,
  FiCalendar,
  FiShield,
  FiClock,
  FiExternalLink
} from "react-icons/fi";

import "./Subscription.css";

export default function Subscription() {
  const [plans, setPlans] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [entitlements, setEntitlements] = useState(null);
  const [payments, setPayments] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const [billingCycle, setBillingCycle] = useState("monthly");

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [activeTab, setActiveTab] = useState("plans");

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelImmediately, setCancelImmediately] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState(null);

  // Paddle instance
  const [paddle, setPaddle] = useState(null);

  /*
   * ---------------------------------------------------------
   * PADDLE INITIALIZATION
   * ---------------------------------------------------------
   */
  useEffect(() => {
    let mounted = true;

    async function initializePaddleCheckout() {
      try {
        const token = import.meta.env.VITE_PADDLE_CLIENT_TOKEN;

        if (!token) {
          throw new Error(
            "VITE_PADDLE_CLIENT_TOKEN is missing from the frontend environment."
          );
        }

        if (!token.startsWith("test_")) {
          throw new Error(
            "The frontend must use a Paddle Sandbox client-side token starting with test_."
          );
        }

        const paddleInstance = await initializePaddle({
          environment: "sandbox",
          token,
          checkout: {
            settings: {
              displayMode: "overlay",
              theme: "light",
              locale: "en"
            }
          }
        });

        if (mounted) {
          setPaddle(paddleInstance);
        }
      } catch (error) {
        console.error("Paddle initialization error:", error);

        if (mounted) {
          toast.error(
            error?.message ||
              "Unable to initialize the payment system."
          );
        }
      }
    }

    initializePaddleCheckout();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * LOAD SUBSCRIPTION DATA
   * ---------------------------------------------------------
   */
  async function loadSubscriptionData() {
    try {
      setLoading(true);

      const [
        plansResponse,
        subscriptionResponse,
        entitlementResponse,
        paymentsResponse,
        invoicesResponse
      ] = await Promise.all([
        fetch(`${API_BASE}/api/subscriptions/plans`, {
          credentials: "include"
        }),

        fetch(`${API_BASE}/api/subscriptions/me`, {
          credentials: "include"
        }),

        fetch(`${API_BASE}/api/subscriptions/entitlements`, {
          credentials: "include"
        }),

        fetch(`${API_BASE}/api/subscriptions/payments`, {
          credentials: "include"
        }),

        fetch(`${API_BASE}/api/subscriptions/invoices`, {
          credentials: "include"
        })
      ]);

      const plansData = await plansResponse.json();
      const subscriptionData =
        await subscriptionResponse.json();
      const entitlementData =
        await entitlementResponse.json();
      const paymentsData =
        await paymentsResponse.json();
      const invoicesData =
        await invoicesResponse.json();

      if (!plansResponse.ok) {
        throw new Error(
          plansData?.error ||
            "Failed to load plans."
        );
      }

      if (!subscriptionResponse.ok) {
        throw new Error(
          subscriptionData?.error ||
            "Failed to load subscription."
        );
      }

      if (!entitlementResponse.ok) {
        throw new Error(
          entitlementData?.error ||
            "Failed to load entitlements."
        );
      }

      if (!paymentsResponse.ok) {
        throw new Error(
          paymentsData?.error ||
            "Failed to load payments."
        );
      }

      if (!invoicesResponse.ok) {
        throw new Error(
          invoicesData?.error ||
            "Failed to load invoices."
        );
      }

      setPlans(plansData?.plans || []);

      setSubscription(
        subscriptionData?.subscription || null
      );

      setEntitlements(
        entitlementData?.entitlements || null
      );

      setPayments(
        paymentsData?.payments || []
      );

      setInvoices(
        invoicesData?.invoices || []
      );
    } catch (error) {
      console.error(
        "Subscription data error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to load subscription data."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubscriptionData();
  }, []);

  /*
   * ---------------------------------------------------------
   * PLAN HELPERS
   * ---------------------------------------------------------
   */
  const currentPlanId =
    subscription?.plan?._id ||
    subscription?.plan?.id ||
    subscription?.plan ||
    null;

  const currentPlan = useMemo(() => {
    return (
      plans.find(
        (plan) =>
          String(
            plan?._id || plan?.id
          ) === String(currentPlanId)
      ) ||
      (
        typeof subscription?.plan === "object"
          ? subscription.plan
          : null
      ) ||
      null
    );
  }, [
    plans,
    currentPlanId,
    subscription
  ]);

  function formatPrice(plan) {
    if (!plan) {
      return "0";
    }

    if (plan.isFree) {
      return "Free";
    }

    const price =
      billingCycle === "yearly"
        ? plan?.pricing?.yearly
        : plan?.pricing?.monthly;

    return Number(price || 0).toFixed(2);
  }

  function formatCurrency(plan) {
    return (
      plan?.pricing?.currency ||
      "USD"
    );
  }

  function formatDate(date) {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return new Intl.DateTimeFormat(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric"
      }
    ).format(parsedDate);
  }

  function getStatusLabel(status) {
    const labels = {
      none: "No subscription",
      trialing: "Trial",
      active: "Active",
      past_due: "Payment issue",
      canceled: "Canceled",
      expired: "Expired"
    };

    return (
      labels[status] ||
      status ||
      "Unknown"
    );
  }

  function getStatusClass(status) {
    if (
      status === "active" ||
      status === "trialing"
    ) {
      return "status-success";
    }

    if (status === "past_due") {
      return "status-warning";
    }

    if (
      status === "canceled" ||
      status === "expired"
    ) {
      return "status-danger";
    }

    return "status-neutral";
  }

  function getPlanLevel(plan) {
    if (!plan) {
      return 0;
    }

    return Number(
      plan?.sortOrder || 0
    );
  }

  function isCurrentPlan(plan) {
    return (
      String(
        plan?._id || plan?.id
      ) === String(currentPlanId)
    );
  }

  function isUpgrade(plan) {
    return (
      getPlanLevel(plan) >
      getPlanLevel(currentPlan)
    );
  }

  function isDowngrade(plan) {
    return (
      getPlanLevel(plan) <
      getPlanLevel(currentPlan)
    );
  }

  /*
   * ---------------------------------------------------------
   * EXTRACT PADDLE TRANSACTION ID
   * ---------------------------------------------------------
   */
  function extractTransactionId(result) {
    const directId =
      result?.transactionId ||
      result?.transaction?.id ||
      result?.transaction?.data?.id ||
      null;

    if (directId) {
      return directId;
    }

    if (result?.checkoutUrl) {
      try {
        const checkoutUrl = new URL(
          result.checkoutUrl
        );

        return (
          checkoutUrl.searchParams.get(
            "_ptxn"
          ) || null
        );
      } catch (error) {
        console.error(
          "Unable to parse Paddle checkout URL:",
          error
        );
      }
    }

    return null;
  }

  /*
   * ---------------------------------------------------------
   * PADDLE CHECKOUT
   * ---------------------------------------------------------
   */
  async function handleCheckout(plan) {
    if (!plan) {
      return;
    }

    if (plan.isFree) {
      try {
        setActionLoading(true);
        setSelectedPlan(
          plan?._id || plan?.id
        );

        const response = await fetch(
          `${API_BASE}/api/subscriptions/change-plan`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              planId:
                plan?._id || plan?.id,
              billingCycle: "lifetime"
            })
          }
        );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result?.error ||
              "Unable to select the free plan."
          );
        }

        toast.success(
          result?.message ||
            "Your free plan has been activated."
        );

        await loadSubscriptionData();
      } catch (error) {
        console.error(
          "Free plan error:",
          error
        );

        toast.error(
          error?.message ||
            "Unable to select the free plan."
        );
      } finally {
        setActionLoading(false);
        setSelectedPlan(null);
      }

      return;
    }

    try {
      setActionLoading(true);

      setSelectedPlan(
        plan?._id || plan?.id
      );

      /*
       * Make sure Paddle is initialized.
       */
      if (!paddle) {
        throw new Error(
          "Payment system is still loading. Please try again in a moment."
        );
      }

      /*
       * Create the Paddle transaction through our backend.
       */
      const response = await fetch(
        `${API_BASE}/api/subscriptions/checkout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            planId:
              plan?._id || plan?.id,
            billingCycle
          })
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Checkout failed."
        );
      }

      /*
       * Get the Paddle transaction ID.
       *
       * Preferred:
       * result.transactionId
       *
       * Fallback:
       * result.checkoutUrl -> ?_ptxn=txn_...
       */
      const transactionId =
        extractTransactionId(result);

      if (!transactionId) {
        console.error(
          "Paddle checkout response:",
          result
        );

        throw new Error(
          "Paddle transaction ID was not returned by the server."
        );
      }

      /*
       * IMPORTANT:
       *
       * Do NOT use:
       *
       * window.location.href = result.checkoutUrl
       *
       * because that sends the user to:
       *
       * https://avertools.site/?_ptxn=...
       *
       * Instead, open the transaction directly
       * inside Paddle Checkout.
       */
      paddle.Checkout.open({
        transactionId,

        settings: {
          displayMode: "overlay",
          theme: "light",
          locale: "en",

          successUrl:
            `${window.location.origin}/subscription/success?_ptxn=${encodeURIComponent(
              transactionId
            )}`
        }
      });
    } catch (error) {
      console.error(
        "Paddle checkout error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to open checkout."
      );
    } finally {
      setActionLoading(false);
      setSelectedPlan(null);
    }
  }

  /*
   * ---------------------------------------------------------
   * CHANGE PLAN
   * ---------------------------------------------------------
   */
  async function handleChangePlan(plan) {
    if (!plan) {
      return;
    }

    try {
      setActionLoading(true);

      setSelectedPlan(
        plan?._id || plan?.id
      );

      const response = await fetch(
        `${API_BASE}/api/subscriptions/change-plan`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            planId:
              plan?._id || plan?.id,
            billingCycle
          })
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to change plan."
        );
      }

      toast.success(
        result?.message ||
          "Your subscription has been updated."
      );

      await loadSubscriptionData();
    } catch (error) {
      console.error(
        "Change plan error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to change plan."
      );
    } finally {
      setActionLoading(false);
      setSelectedPlan(null);
    }
  }

  /*
   * ---------------------------------------------------------
   * CANCEL SUBSCRIPTION
   * ---------------------------------------------------------
   */
  async function handleCancel() {
    try {
      setActionLoading(true);

      const response = await fetch(
        `${API_BASE}/api/subscriptions/cancel`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            immediately:
              cancelImmediately
          })
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to cancel subscription."
        );
      }

      setShowCancelModal(false);

      toast.success(
        cancelImmediately
          ? "Your subscription has been canceled."
          : "Your subscription will end at the end of the current period."
      );

      await loadSubscriptionData();
    } catch (error) {
      console.error(
        "Cancel subscription error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to cancel subscription."
      );
    } finally {
      setActionLoading(false);
    }
  }

  /*
   * ---------------------------------------------------------
   * REACTIVATE SUBSCRIPTION
   * ---------------------------------------------------------
   */
  async function handleReactivate() {
    try {
      setActionLoading(true);

      const response = await fetch(
        `${API_BASE}/api/subscriptions/reactivate`,
        {
          method: "POST",
          credentials: "include"
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to reactivate subscription."
        );
      }

      toast.success(
        "Your subscription has been reactivated."
      );

      await loadSubscriptionData();
    } catch (error) {
      console.error(
        "Reactivate subscription error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to reactivate subscription."
      );
    } finally {
      setActionLoading(false);
    }
  }

  /*
   * ---------------------------------------------------------
   * PLAN BUTTON
   * ---------------------------------------------------------
   */
  function renderPlanButton(plan) {
    if (isCurrentPlan(plan)) {
      return (
        <button
          className="subscription-plan-button current"
          disabled
        >
          Current plan
        </button>
      );
    }

    const planId =
      plan?._id || plan?.id;

    /*
     * Paid plan:
     *
     * If there is no real Paddle subscription,
     * open a new Paddle Checkout.
     */
    const needsCheckout =
      !subscription?.provider ||
      subscription?.provider === "internal" ||
      !subscription?.providerSubscriptionId;

    if (
      !plan?.isFree &&
      needsCheckout
    ) {
      return (
        <button
          className="subscription-plan-button"
          onClick={() =>
            handleCheckout(plan)
          }
          disabled={
            actionLoading &&
            selectedPlan === planId
          }
        >
          {actionLoading &&
          selectedPlan === planId ? (
            <FiRefreshCw className="spin" />
          ) : (
            <FiCreditCard />
          )}

          {isUpgrade(plan)
            ? "Upgrade"
            : "Get started"}
        </button>
      );
    }

    /*
     * Existing Paddle subscription:
     * change the plan through the backend.
     */
    if (
      subscription &&
      subscription.provider === "paddle" &&
      subscription.providerSubscriptionId &&
      !plan?.isFree
    ) {
      return (
        <button
          className="subscription-plan-button"
          onClick={() =>
            handleChangePlan(plan)
          }
          disabled={
            actionLoading &&
            selectedPlan === planId
          }
        >
          {actionLoading &&
          selectedPlan === planId ? (
            <FiRefreshCw className="spin" />
          ) : isUpgrade(plan) ? (
            <FiArrowUp />
          ) : (
            <FiArrowDown />
          )}

          {isUpgrade(plan)
            ? "Upgrade"
            : isDowngrade(plan)
              ? "Change plan"
              : "Select plan"}
        </button>
      );
    }

    /*
     * Free plan.
     */
    return (
      <button
        className="subscription-plan-button"
        onClick={() =>
          handleCheckout(plan)
        }
        disabled={
          actionLoading &&
          selectedPlan === planId
        }
      >
        {actionLoading &&
        selectedPlan === planId ? (
          <FiRefreshCw className="spin" />
        ) : (
          <FiZap />
        )}

        {plan?.isFree
          ? "Choose free plan"
          : "Get started"}
      </button>
    );
  }

  /*
   * ---------------------------------------------------------
   * FEATURES
   * ---------------------------------------------------------
   */
  function renderFeature(feature, index) {
    const enabled =
      feature?.enabled !== false;

    return (
      <li
        key={
          feature?.key ||
          `feature-${index}`
        }
        className={
          enabled
            ? "feature-enabled"
            : "feature-disabled"
        }
      >
        {enabled ? (
          <FiCheck />
        ) : (
          <FiX />
        )}

        <span>
          {feature?.key ||
            "Feature"}
        </span>
      </li>
    );
  }

  /*
   * ---------------------------------------------------------
   * LOADING
   * ---------------------------------------------------------
   */
  if (loading) {
    return (
      <main className="subscription-page">
        <div className="subscription-loading">
          <div className="loading-spinner" />

          <p>
            Loading your subscription...
          </p>
        </div>
      </main>
    );
  }

  /*
   * ---------------------------------------------------------
   * PAGE
   * ---------------------------------------------------------
   */
  return (
    <main className="subscription-page">
      <div className="subscription-container">

        {/* HEADER */}
        <header className="subscription-header">
          <div>
            <span className="subscription-eyebrow">
              QEVORA MEMBERSHIP
            </span>

            <h1>
              Subscription
            </h1>

            <p>
              Manage your plan, billing,
              payments and account
              benefits from one place.
            </p>
          </div>

          <div className="subscription-security">
            <FiShield />

            <span>
              Secure payments powered
              by Paddle
            </span>
          </div>
        </header>

        {/* CURRENT SUBSCRIPTION */}
        <section className="current-subscription-card">
          <div className="current-subscription-main">
            <div className="current-plan-icon">
              <FiZap />
            </div>

            <div>
              <span className="current-label">
                CURRENT PLAN
              </span>

              <h2>
                {currentPlan?.name ||
                  "Free"}
              </h2>

              <div className="current-meta">
                <span
                  className={`subscription-status ${getStatusClass(
                    subscription?.status
                  )}`}
                >
                  <span />

                  {getStatusLabel(
                    subscription?.status
                  )}
                </span>

                {subscription?.provider && (
                  <span>
                    via{" "}
                    {subscription.provider}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="current-subscription-details">
            <div>
              <FiCalendar />

              <span>
                <small>
                  Current period
                </small>

                <strong>
                  {formatDate(
                    subscription?.currentPeriodEnd
                  )}
                </strong>
              </span>
            </div>

            <div>
              <FiClock />

              <span>
                <small>
                  Billing
                </small>

                <strong>
                  {subscription?.billingCycle ||
                    "lifetime"}
                </strong>
              </span>
            </div>

            {subscription?.cancelAtPeriodEnd && (
              <div className="cancel-warning">
                <FiAlertCircle />

                <span>
                  <small>
                    Cancellation
                  </small>

                  <strong>
                    Ends at period end
                  </strong>
                </span>
              </div>
            )}
          </div>
        </section>

        {/* REACTIVATION */}
        {subscription?.cancelAtPeriodEnd && (
          <section className="reactivation-banner">
            <div>
              <FiAlertCircle />

              <div>
                <strong>
                  Your subscription is
                  scheduled for cancellation.
                </strong>

                <p>
                  You can reactivate it
                  before the current period
                  ends.
                </p>
              </div>
            </div>

            <button
              onClick={
                handleReactivate
              }
              disabled={actionLoading}
            >
              <FiRefreshCw />

              Reactivate
            </button>
          </section>
        )}

        {/* TABS */}
        <nav className="subscription-tabs">
          <button
            className={
              activeTab === "plans"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("plans")
            }
          >
            <FiZap />
            Plans
          </button>

          <button
            className={
              activeTab === "payments"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("payments")
            }
          >
            <FiCreditCard />
            Payments
          </button>

          <button
            className={
              activeTab === "invoices"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("invoices")
            }
          >
            <FiFileText />
            Invoices
          </button>
        </nav>

        {/* PLANS */}
        {activeTab === "plans" && (
          <>
            <section className="billing-selector">
              <div>
                <h2>
                  Choose your plan
                </h2>

                <p>
                  Select the plan that
                  matches your needs.
                </p>
              </div>

              <div className="billing-toggle">
                <button
                  className={
                    billingCycle ===
                    "monthly"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setBillingCycle(
                      "monthly"
                    )
                  }
                >
                  Monthly
                </button>

                <button
                  className={
                    billingCycle ===
                    "yearly"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setBillingCycle(
                      "yearly"
                    )
                  }
                >
                  Yearly

                  <span>
                    Save
                  </span>
                </button>
              </div>
            </section>

            <section className="plans-grid">
              {plans.map((plan) => (
                <article
                  key={
                    plan?._id ||
                    plan?.id
                  }
                  className={`plan-card ${
                    isCurrentPlan(plan)
                      ? "plan-current"
                      : ""
                  } ${
                    plan?.featured
                      ? "plan-featured"
                      : ""
                  }`}
                >
                  {plan?.featured && (
                    <div className="plan-badge">
                      Recommended
                    </div>
                  )}

                  {isCurrentPlan(plan) && (
                    <div className="plan-current-badge">
                      Your plan
                    </div>
                  )}

                  <div className="plan-card-top">
                    <h3>
                      {plan?.name}
                    </h3>

                    <p>
                      {plan?.description ||
                        "Everything you need to get started."}
                    </p>
                  </div>

                  <div className="plan-price">
                    {plan?.isFree ? (
                      <strong>
                        Free
                      </strong>
                    ) : (
                      <>
                        <strong>
                          {formatPrice(
                            plan
                          )}
                        </strong>

                        <span>
                          {formatCurrency(
                            plan
                          )}

                          {" / "}

                          {billingCycle ===
                          "yearly"
                            ? "year"
                            : "month"}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="plan-divider" />

                  <ul className="plan-features">
                    {(
                      plan?.features ||
                      []
                    ).map(
                      renderFeature
                    )}
                  </ul>

                  <div className="plan-limits">
                    <div>
                      <span>
                        Products
                      </span>

                      <strong>
                        {plan?.limits
                          ?.products ===
                        -1
                          ? "Unlimited"
                          : plan?.limits
                              ?.products ??
                            0}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Links
                      </span>

                      <strong>
                        {plan?.limits
                          ?.links ===
                        -1
                          ? "Unlimited"
                          : plan?.limits
                              ?.links ??
                            0}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Storage
                      </span>

                      <strong>
                        {plan?.limits
                          ?.storage ===
                        -1
                          ? "Unlimited"
                          : plan?.limits
                              ?.storage ??
                            0}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Team members
                      </span>

                      <strong>
                        {plan?.limits
                          ?.teamMembers ===
                        -1
                          ? "Unlimited"
                          : plan?.limits
                              ?.teamMembers ??
                            1}
                      </strong>
                    </div>
                  </div>

                  {renderPlanButton(
                    plan
                  )}
                </article>
              ))}
            </section>

            {/* CANCEL */}
            {subscription &&
              subscription.status !==
                "canceled" &&
              subscription.status !==
                "expired" &&
              !subscription.cancelAtPeriodEnd && (
                <section className="danger-zone">
                  <div>
                    <h3>
                      Cancel subscription
                    </h3>

                    <p>
                      You can cancel your
                      subscription at any
                      time.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setShowCancelModal(
                        true
                      )
                    }
                  >
                    Cancel subscription
                  </button>
                </section>
              )}
          </>
        )}

        {/* PAYMENTS */}
        {activeTab === "payments" && (
          <section className="history-section">
            <div className="history-header">
              <div>
                <h2>
                  Payment history
                </h2>

                <p>
                  A complete record of
                  your subscription
                  payments.
                </p>
              </div>
            </div>

            {payments.length === 0 ? (
              <div className="empty-history">
                <FiCreditCard />

                <h3>
                  No payments yet
                </h3>

                <p>
                  Your payments will
                  appear here after
                  completing a purchase.
                </p>
              </div>
            ) : (
              <div className="history-table-wrapper">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Provider</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {payments.map(
                      (payment) => (
                        <tr
                          key={
                            payment?._id
                          }
                        >
                          <td>
                            {formatDate(
                              payment?.createdAt
                            )}
                          </td>

                          <td>
                            {payment?.type ||
                              "subscription"}
                          </td>

                          <td>
                            <strong>
                              {Number(
                                payment?.amount ||
                                  0
                              ).toFixed(
                                2
                              )}{" "}
                              {
                                payment?.currency
                              }
                            </strong>
                          </td>

                          <td>
                            {
                              payment?.provider
                            }
                          </td>

                          <td>
                            <span
                              className={`table-status ${getStatusClass(
                                payment?.status
                              )}`}
                            >
                              {
                                payment?.status
                              }
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* INVOICES */}
        {activeTab === "invoices" && (
          <section className="history-section">
            <div className="history-header">
              <div>
                <h2>
                  Invoices
                </h2>

                <p>
                  View your billing
                  documents and invoice
                  history.
                </p>
              </div>
            </div>

            {invoices.length === 0 ? (
              <div className="empty-history">
                <FiFileText />

                <h3>
                  No invoices yet
                </h3>

                <p>
                  Your invoices will
                  appear here after a
                  successful payment.
                </p>
              </div>
            ) : (
              <div className="history-table-wrapper">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>
                        Invoice
                      </th>
                      <th>
                        Date
                      </th>
                      <th>
                        Amount
                      </th>
                      <th>
                        Status
                      </th>
                      <th>
                        Document
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {invoices.map(
                      (invoice) => (
                        <tr
                          key={
                            invoice?._id
                          }
                        >
                          <td>
                            <strong>
                              {
                                invoice?.invoiceNumber
                              }
                            </strong>
                          </td>

                          <td>
                            {formatDate(
                              invoice?.createdAt
                            )}
                          </td>

                          <td>
                            {Number(
                              invoice?.amount ||
                                0
                            ).toFixed(
                              2
                            )}{" "}
                            {
                              invoice?.currency
                            }
                          </td>

                          <td>
                            <span
                              className={`table-status ${getStatusClass(
                                invoice?.status
                              )}`}
                            >
                              {
                                invoice?.status
                              }
                            </span>
                          </td>

                          <td>
                            {invoice?.invoiceUrl ? (
                              <a
                                href={
                                  invoice.invoiceUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="invoice-link"
                              >
                                Open
                                <FiExternalLink />
                              </a>
                            ) : (
                              "—"
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* ENTITLEMENTS */}
        {entitlements && (
          <section className="entitlements-card">
            <div className="entitlements-heading">
              <div className="entitlements-icon">
                <FiShield />
              </div>

              <div>
                <h2>
                  Your current access
                </h2>

                <p>
                  Features and limits
                  available on your
                  account.
                </p>
              </div>
            </div>

            <div className="entitlements-grid">
              {Object.entries(
                entitlements
              ).map(
                ([key, value]) => (
                  <div
                    className="entitlement-item"
                    key={key}
                  >
                    <span>
                      {key}
                    </span>

                    <strong>
                      {typeof value ===
                      "boolean"
                        ? value
                          ? "Enabled"
                          : "Disabled"
                        : value === -1
                          ? "Unlimited"
                          : String(
                              value ??
                                "—"
                            )}
                    </strong>
                  </div>
                )
              )}
            </div>
          </section>
        )}
      </div>

      {/* CANCEL MODAL */}
      {showCancelModal && (
        <div
          className="subscription-modal-backdrop"
          onClick={() =>
            setShowCancelModal(false)
          }
        >
          <div
            className="subscription-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="modal-icon">
              <FiAlertCircle />
            </div>

            <h2>
              Cancel subscription?
            </h2>

            <p>
              Choose how you want to
              cancel your current
              subscription.
            </p>

            <label className="cancel-option">
              <input
                type="checkbox"
                checked={
                  cancelImmediately
                }
                onChange={(event) =>
                  setCancelImmediately(
                    event.target.checked
                  )
                }
              />

              <span>
                Cancel immediately
              </span>
            </label>

            <div className="modal-actions">
              <button
                className="modal-secondary"
                onClick={() =>
                  setShowCancelModal(
                    false
                  )
                }
              >
                Keep subscription
              </button>

              <button
                className="modal-danger"
                onClick={
                  handleCancel
                }
                disabled={
                  actionLoading
                }
              >
                {actionLoading ? (
                  <FiRefreshCw className="spin" />
                ) : (
                  "Confirm cancellation"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
 
