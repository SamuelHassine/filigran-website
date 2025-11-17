const DEFAULT_SIMULATION_DELAY = 1200;

export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  platform?: string;
  message?: string;
  [key: string]: string | undefined;
}

type LeadFormResponse = { simulated: true } | Record<string, unknown>;

export async function submitLeadForm(payload: LeadPayload): Promise<LeadFormResponse> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  if (!endpoint) {
    await simulateNetworkLatency();
    return { simulated: true } as const;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Unable to submit form');
  }

  const data = (await response.json()) as Record<string, unknown>;
  return data;
}

async function simulateNetworkLatency(delay = DEFAULT_SIMULATION_DELAY): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

