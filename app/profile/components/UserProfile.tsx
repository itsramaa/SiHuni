import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Phone, Mail, User, Edit } from "lucide-react";

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    joinDate: string;
    verified: boolean;
  };
  onEdit: () => void;
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Profil Saya</CardTitle>
        <Button variant="ghost" size="icon" onClick={onEdit}>
          <Edit className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <div className="flex items-center gap-2">
              <Badge variant={user.verified ? "default" : "secondary"}>
                {user.verified ? "Terverifikasi" : "Belum Terverifikasi"}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Bergabung sejak {user.joinDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}