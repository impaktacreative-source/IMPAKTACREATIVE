import { createFileRoute, notFound } from "@tanstack/react-router";

import { getServiceBySlug } from "@/lib/services-data";
import { ServiceDetailPage } from "@/pages/service-detail-page";

export const Route = createFileRoute("/es/servicos/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug, "es");
    if (!service) throw notFound();
    return service;
  },
  component: () => <ServiceDetailPage locale="es" service={Route.useLoaderData()} />,
});
