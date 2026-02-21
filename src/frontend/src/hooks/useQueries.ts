import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactForm } from '../backend';

export function useGetAllContacts() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactForm[]>({
    queryKey: ['contacts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContacts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactByEmail(email: string) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactForm | null>({
    queryKey: ['contact', email],
    queryFn: async () => {
      if (!actor || !email) return null;
      try {
        return await actor.getContactByEmail(email);
      } catch (error) {
        return null;
      }
    },
    enabled: !!actor && !isFetching && !!email,
  });
}
