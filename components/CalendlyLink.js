import { openPopupWidget } from "react-calendly";
import Link from "@material-ui/core/Link";

export default function CalendlyLink({
  url,
  prefill,
  pageSettings,
  utm,
  text,
}) {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return (
    <Link
      onClick={onClick}
      target="_blank"
      class="uppercase text-lg text-white font-light border-bottom-white mb-20 font-light tracking-wide cursor-pointer"
    >
      {text}
    </Link>
  );
}
