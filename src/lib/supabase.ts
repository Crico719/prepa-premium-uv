const SB_URL = "https://jvyrgsxbzlzokotyzepw.supabase.co";
const SB_KEY = "sb_publishable_i80Lpj4bEIGTUX1_j5vlGQ_4cTESJ2D";

function headers() {
  return {
    apikey: SB_KEY,
    Authorization: `Bearer ${SB_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  } as const;
}

export async function sbSelect(table: string, query = "") {
  const url = `${SB_URL}/rest/v1/${table}?${query}`;
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function sbInsert(table: string, body: Record<string, unknown>) {
  const res = await fetch(`${SB_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function sbDelete(table: string, query: string) {
  const res = await fetch(`${SB_URL}/rest/v1/${table}?${query}`, {
    method: "DELETE",
    headers: headers(),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function sbRpc(fn: string, params: Record<string, unknown>) {
  const res = await fetch(`${SB_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(params),
  });
  if (!res.ok) throw new Error(await res.text());
}
