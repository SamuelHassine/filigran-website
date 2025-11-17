import { useEffect, useId } from "react";

import { cn } from "@/lib/utils";
import { createHubSpotForm, cleanupHubSpotForm } from "@/lib/hubspot";

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
  targetId?: string;
}

export function HubspotForm({
  portalId,
  formId,
  region = "eu1",
  className,
  targetId,
}: HubspotFormProps) {
  const instanceId = useId();
  const sanitizedId = instanceId.replace(/:/g, "");
  const containerId = targetId ?? `hs-form-${sanitizedId}`;

  useEffect(() => {
    // Create HubSpot form with enhanced styling
    void createHubSpotForm({
      region,
      portalId,
      formId,
      target: `#${containerId}`,
    });

    // Cleanup on unmount
    return () => {
      cleanupHubSpotForm(containerId);
    };
  }, [containerId, formId, portalId, region]);

  return (
    <div
      id={containerId}
      className={cn(
        "hubspot-form-styled",
        className,
      )}
    >
      <div className="hs-form-loading animate-pulse space-y-4">
        <div className="h-10 bg-white/5 rounded-lg"></div>
        <div className="h-10 bg-white/5 rounded-lg"></div>
        <div className="h-10 bg-white/5 rounded-lg"></div>
        <div className="h-12 bg-cyan/20 rounded-lg"></div>
      </div>
    </div>
  );
}

