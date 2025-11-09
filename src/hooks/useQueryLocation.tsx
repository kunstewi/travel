import { useQuery } from "@tanstack/react-query";
import { locations } from "../utils/content";

// Mock function that simulates an API call
async function getLocations() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return locations;
}

export default function useQueryLocations() {
  const {
    data: locations,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Locations"],
    queryFn: getLocations,
  });

  return {
    locations,
    error,
    isLoading,
  };
}
