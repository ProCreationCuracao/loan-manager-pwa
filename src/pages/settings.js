import ProfileForm from '../components/UpsertProfileForm';
import ThemeToggle from '../components/ThemeToggle';

export default function SettingsTab() {
  return (
    <div className="space-y-6">
      <ThemeToggle />
      <ProfileForm />
      {/* add notification prefs, logout button */}
    </div>
  );
}