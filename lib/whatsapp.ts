import { AGENCY_INFO } from "@/lib/constants";

export const generateWhatsAppLink = (message: string = "") => {
  // 1. Tomamos el número directamente de las constantes (¡Ya no está fijo aquí!)
  const phoneNumber = AGENCY_INFO.phone;

  // 2. Preparamos el mensaje para que funcione en la URL (cambia espacios por %20, etc.)
  const encodedMessage = encodeURIComponent(message);

  // 3. Devolvemos el enlace completo
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};