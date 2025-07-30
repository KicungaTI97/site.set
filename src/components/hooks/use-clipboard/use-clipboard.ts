import { useCallback, useEffect, useState } from "react";
type UseClipboardProps = {
  time?: number;
}
export const UseClipboard = ({time = 200}:UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback((text: string) => {
    if(!navigator.clipboard) {
      console.error("Clipboard não suportado neste navegador.");
      return false;
    }

    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Erro ao copiar para a área de transferência:", error);
      return false;
    }
    navigator.clipboard.writeText(text)
}, []);

useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, time);
      return () => clearTimeout(timer);
    }
  }, [isCopied, time]);

  return {
    isCopied,
    handleCopy
  }
}