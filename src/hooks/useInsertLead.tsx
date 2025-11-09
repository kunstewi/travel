import { useMutation } from "@tanstack/react-query";
import type { Lead } from "../utils/contentTypes";

// Mock function that simulates inserting a lead
async function insertLead(lead: Lead) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Log the lead data (in a real app, this would be sent to a server)
  console.log("Lead submitted:", lead);

  // Simulate successful insertion
  return { success: true };
}

interface useInsertLeadProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export default function useInsertLead(props: useInsertLeadProps) {
  const mutation = useMutation({
    mutationFn: async (lead: Lead) => insertLead(lead),
    onSuccess: props.onSuccess,
    onError: props.onError,
  });

  return mutation;
}
