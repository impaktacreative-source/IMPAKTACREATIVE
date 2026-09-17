import { createFileRoute, notFound } from "@tanstack/react-router";

import { getServiceBySlug } from "@/lib/services-data";
import { ServiceDetailPage } from "@/pages/service-detail-page";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug, "pt");
    if (!service) throw notFound();
    return service;
  },
  component: () => <ServiceDetailPage locale="pt" service={Route.useLoaderData()} />,
});
