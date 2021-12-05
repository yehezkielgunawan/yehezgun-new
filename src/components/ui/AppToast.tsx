import { useToast, UseToastOptions } from "@chakra-ui/react";

export const useAppToast = (options?: UseToastOptions) =>
  useToast({
    variant: "top-accent",
    position: "bottom-right",
    isClosable: true,
    ...options,
  });
