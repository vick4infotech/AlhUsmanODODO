import {
  HeartPulse,
  Route,
  Shield,
  TrendingUp,
  Landmark,
  Stethoscope,
  GraduationCap,
  Sprout,
  ShieldCheck,
  Users,
  Building2,
  Award,
  Camera,
  ArrowRight
} from "lucide-react";

export const iconMap = {
  HeartPulse,
  Route,
  Shield,
  TrendingUp,
  Landmark,
  Stethoscope,
  GraduationCap,
  Sprout,
  ShieldCheck,
  Users,
  Building2,
  Award,
  Camera,
  ArrowRight
};

export function getIcon(name) {
  return iconMap[name] || null;
}
