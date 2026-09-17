import { createFileRoute, notFound } from "@tanstack/react-router";

import { getServiceBySlug } from "@/lib/services-data";
import { ServiceDetailPage } from "@/pages/service-detail-page";

export const Route = createFileRoute("/en/servicos/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug, "en");
    if (!service) throw notFound();
    return service;
  },
  component: () => <ServiceDetailPage locale="en" service={Route.useLoaderData()} />,
});
