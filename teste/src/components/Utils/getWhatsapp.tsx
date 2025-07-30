export function getWhatsLink(message: string, numero = "5511999999999") {
    return `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
  }