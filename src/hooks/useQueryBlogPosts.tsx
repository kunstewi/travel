import { useQuery } from "@tanstack/react-query";
import { blogPosts } from "../utils/content";

// Mock function that simulates an API call
async function getBlogPosts() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return blogPosts;
}

export default function useQueryBlogPosts() {
  const {
    data: blogPosts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["BlogPosts"],
    queryFn: getBlogPosts,
  });

  return { blogPosts, error, isLoading };
}
