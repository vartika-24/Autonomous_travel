export async function approveRecovery() {
  const res = await fetch("http://localhost:4000/approve", {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Approval failed");
  }

  return res.json();
}