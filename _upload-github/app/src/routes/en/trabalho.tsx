import { createFileRoute } from "@tanstack/react-router";

import { TrabalhoPage } from "@/pages/trabalho-page";

export const Route = createFileRoute("/en/trabalho")({
  component: () => <TrabalhoPage locale="en" />,
});
