import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreateNoteModalProps {
  onSuccess: () => void;
  children?: JSX.Element;
}

export const CreateNoteModal = ({ children, onSuccess }: CreateNoteModalProps) => {
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setOpened(false);
  };

  const handleCreateNewNote: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const filename = formData.get('filename') as string;
    if (!filename) {
      return;
    }

    await window.context
      .createNote(filename, '')
      .then(onSuccess)
      .finally(() => setIsLoading(false));

    closeModal();
  };

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleCreateNewNote}>
          <DialogHeader>
            <DialogTitle>Create Note</DialogTitle>
            <DialogDescription>Write the file name of your note here</DialogDescription>
          </DialogHeader>

          <div className="py-2">
            <Label htmlFor="filename" className="text-right">
              File Name
            </Label>
            <Input name="filename" id="filename" className="col-span-3" />
          </div>

          <DialogFooter>
            <Button type="submit">{isLoading ? 'Loading...' : 'Save changes'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
