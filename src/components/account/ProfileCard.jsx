import Card from "../common/Card";
import Button from "../common/Button";
import { User } from "lucide-react";

const ProfileCard = ({
  user,
  onEditProfile,
}) => {
  return (
    <Card>

      <div className="flex flex-col items-center text-center">

        {/* Profile Picture */}

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-blue-100
            text-blue-600
          "
        >
          {user?.profileImage ? (
            <img
              src={user.profileImage}
              alt={user.fullName}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <User size={40} />
          )}
        </div>

        {/* User Info */}

        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {user?.fullName || ""}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {user?.email || ""}
        </p>

        {/* Edit Button */}

        <div className="mt-6 w-full">

          <Button
            fullWidth
            onClick={onEditProfile}
          >
            Edit Profile
          </Button>

        </div>

      </div>

    </Card>
  );
};

export default ProfileCard;