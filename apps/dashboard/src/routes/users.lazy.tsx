import { createLazyFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { apiClient } from "@nextsora/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Modal } from "@/components/ui/modal";
import SidebarLayout from "@/components/SidebarLayout";

export const Route = createLazyFileRoute("/users")({
  component: UsersPage,
});

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

type UserForm = {
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  role?: string;
};

function UsersPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<User | null>(null);

  const { register, handleSubmit, reset } = useForm<UserForm>();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("/users/list");
      setUsers(res.data);
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Tải danh sách người dùng thất bại");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const onCreate = async (data: UserForm) => {
    try {
      await apiClient.post("/users", data);
      toast.success("Tạo người dùng thành công");
      setOpen(false);
      reset({ email: "", password: "", firstName: "", lastName: "", role: "user" });
      fetchUsers();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Tạo thất bại");
    }
  };

  const onUpdate = async (id: string, data: Partial<UserForm>) => {
    try {
      await apiClient.patch(`/users/${id}`, data);
      toast.success("Cập nhật thành công");
      setEditing(null);
      fetchUsers();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Cập nhật thất bại");
    }
  };

  const onDelete = async (id: string) => {
    if (!confirm("Xóa người dùng này?")) return;
    try {
      await apiClient.delete(`/users/${id}`);
      toast.success("Đã xóa");
      fetchUsers();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Xóa thất bại");
    }
  };

  return (
    <SidebarLayout>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Quản lý người dùng</h1>
        <Button onClick={() => { setOpen(true); setEditing(null); }}>Thêm người dùng</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Họ</TableHead>
            <TableHead>Tên</TableHead>
            <TableHead>Vai trò</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow><TableCell>Đang tải...</TableCell></TableRow>
          ) : users.length ? (
            users.map(u => (
              <TableRow key={u.id}>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.lastName}</TableCell>
                <TableCell>{u.firstName}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => { setEditing(u); reset({ email: u.email, firstName: u.firstName, lastName: u.lastName, role: u.role }); }}>Sửa</Button>
                  <Button variant="destructive" size="sm" onClick={() => onDelete(u.id)}>Xóa</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow><TableCell>Không có dữ liệu</TableCell></TableRow>
          )}
        </TableBody>
        <TableCaption>Danh sách người dùng</TableCaption>
      </Table>

      {/* Create / Edit Modal */}
      <Modal open={open || !!editing} onClose={() => { setOpen(false); setEditing(null); }} title={editing ? "Sửa người dùng" : "Thêm người dùng"}>
        <form className="space-y-3" onSubmit={handleSubmit(data => editing ? onUpdate(editing.id, data) : onCreate(data))}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm">Email</label>
              <Input type="email" {...register("email")} disabled={!!editing} />
            </div>
            <div>
              <label className="text-sm">Mật khẩu</label>
              <Input type="password" {...register("password")} placeholder={editing ? "Để trống nếu không đổi" : ""} />
            </div>
            <div>
              <label className="text-sm">Họ</label>
              <Input {...register("lastName")} />
            </div>
            <div>
              <label className="text-sm">Tên</label>
              <Input {...register("firstName")} />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Vai trò</label>
              <Input {...register("role")} placeholder="user | admin | moderator" />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => { setOpen(false); setEditing(null); }}>Hủy</Button>
            <Button type="submit">{editing ? "Cập nhật" : "Tạo mới"}</Button>
          </div>
        </form>
      </Modal>
    </SidebarLayout>
  );
}
