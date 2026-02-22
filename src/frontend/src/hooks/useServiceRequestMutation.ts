import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ServiceRequestData {
  applianceType: string;
  modelNumber: string;
  issueDescription: string;
  customerName: string;
  customerEmail: string;
}

export function useServiceRequestMutation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ServiceRequestData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      await actor.submitServiceRequest(
        data.applianceType,
        data.modelNumber,
        data.issueDescription,
        data.customerName,
        data.customerEmail
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['serviceRequests'] });
    },
  });
}
