import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DeleteDialogProps {
  userId: string;
  userName?: string;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteDialog({
  userId,
  userName,
  onClose,
  onDelete,
}: DeleteDialogProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const currentUser = await authClient.getSession();

    if (currentUser?.data?.user?.id === userId) {
      toast.error("Tidak dapat menghapus diri sendiri");
      onClose();
      return;
    }

    const { data: deletedUser, error } = await authClient.admin.removeUser({
      userId,
    });

    if (error) {
      toast.error("Gagal menghapus user: " + error.message);
      console.error("Failed to delete user:", error);
    } else {
      toast.success("User berhasil dihapus");
      router.refresh();
      onDelete();
      console.log("User deleted:", deletedUser);
    }
  };

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan. Ini akan menghapus permanen{" "}
            {userName ? `user ${userName}` : "user ini"} dan menghapus data dari
            server kami.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
