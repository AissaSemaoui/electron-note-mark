import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DeleteNoteConfirmProps {
  onSuccess?: () => void;
  onConfirm: () => Promise<void>;
  children?: JSX.Element;
}

export const DeleteNoteConfirm = ({ children, onSuccess, onConfirm }: DeleteNoteConfirmProps) => {
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setOpened(false);
  };

  const handleDeleteNote = async () => {
    setIsLoading(true);
    onConfirm()
      .then(onSuccess)
      .finally(() => {
        setIsLoading(false);
      });

    closeModal();
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deleting Note</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDeleteNote}>
            {isLoading ? 'Loading...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
