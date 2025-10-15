import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.info("Authentication is not required for this application");
    navigate("/");
  }, [navigate]);

  return null;
}
