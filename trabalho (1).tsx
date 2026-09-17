import { createFileRoute } from "@tanstack/react-router";

import { TrabalhoPage } from "@/pages/trabalho-page";

export const Route = createFileRoute("/es/trabalho")({
  component: () => <TrabalhoPage locale="es" />,
});
