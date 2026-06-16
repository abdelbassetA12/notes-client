export default function LoadingScreen() {
  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.spinner}></div>
        <p style={styles.text}>Loading...</p>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

const styles = {
  overlay: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#eef2ff,#f8fafc)",
  },
  spinner: {
    width: 55,
    height: 55,
    border: "6px solid #e5e7eb",
    borderTop: "6px solid #4f46e5",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: 15
  },
  text: {
    color: "#4f46e5",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: "0.5px"
  }
};