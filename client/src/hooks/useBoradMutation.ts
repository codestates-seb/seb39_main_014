import {
  useMutation,
  useQueryClient,
  MutationFunction,
} from "@tanstack/react-query";

const useBoardMutation = <T, F extends {}>(
  callback: MutationFunction<T, F>,
  key: string
) => {
  const QueryClient = useQueryClient();
  return useMutation(callback, {
    onSuccess: () => {
      QueryClient.invalidateQueries([key], { refetchType: "all" });
    },
    onError: error => {
      console.error(error);
    },
  });
};

export default useBoardMutation;
