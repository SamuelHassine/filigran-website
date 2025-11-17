// HubSpot Form Helper
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: HubSpotFormConfig) => void;
      };
    };
  }
}

export interface HubSpotFormConfig {
  region: string;
  portalId: string;
  formId: string;
  target: string;
  onFormSubmitted?: () => void;
  cssClass?: string;
  css?: string;
}

// Load HubSpot forms script
export const loadHubSpotScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (window.hbspt?.forms) {
      resolve();
      return;
    }

    const existingScript = document.querySelector('script[src*="hsforms.net"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => { resolve(); });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => { resolve(); };
    script.onerror = () => { reject(new Error('Failed to load HubSpot script')); };
    
    document.body.appendChild(script);
  });
};

// Create HubSpot form with enhanced styling
export const createHubSpotForm = async (config: Omit<HubSpotFormConfig, 'cssClass'>) => {
  try {
    await loadHubSpotScript();
    
    if (window.hbspt?.forms) {
      window.hbspt.forms.create({
        ...config,
        cssClass: 'hubspot-form-styled',
      });
    }
  } catch (error) {
    console.error('Error creating HubSpot form:', error);
  }
};

// Clean up HubSpot form
export const cleanupHubSpotForm = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '';
  }
};
