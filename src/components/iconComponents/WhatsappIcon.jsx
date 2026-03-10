import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsappIcon = ({
  phone = "",
  message = "",
  wrapperClass = "home-contact-icon",
  iconClass = "",
  color = "",
  ...props
}) => {
  const normalizedPhone = String(phone).replace(/\D/g, "");
  const baseUrl = normalizedPhone
    ? `https://wa.me/${normalizedPhone}`
    : "https://wa.me/";
  const href = message
    ? `${baseUrl}?text=${encodeURIComponent(message)}`
    : baseUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className={wrapperClass}
      {...props}
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        className={iconClass}
        style={color ? { color } : {}}
      />
    </a>
  );
};

export default WhatsappIcon;
